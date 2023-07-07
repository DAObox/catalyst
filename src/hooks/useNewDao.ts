import { DaoCreationSteps } from "@aragon/sdk-client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { useAragon } from "@/contexts/AragonContext";
import { type NewDaoParams, type NewDaoReturnType, NewDaoStatus } from "typings/typings";

/**
 * @function useNewDao
 * @param {NewDaoParams} params - The parameters for creating a new DAO.
 * @returns {NewDaoReturnType} - The mutation object and the states of the new DAO creation process.
 */
export function useNewDao({
  daoMetadata,
  daoUri,
  ensSubdomain,
  trustedForwarder,
  plugins = [],
  onError,
  onMutate,
  onSettled,
  onSuccess,
  onCreateDaoTransaction,
}: NewDaoParams): NewDaoReturnType {
  const [daoAddress, setDaoAddress] = useState<string | null>(null);
  const [daoTxHash, setDaoTxHash] = useState<string | null>(null);
  const [creationStatus, setCreationStatus] = useState<NewDaoStatus>(NewDaoStatus.IDLE);
  const { baseClient: client } = useAragon();

  const createDao = async (newDaoParams: NewDaoParams) => {
    if (!client) throw new Error("No Aragon Client found");
    let daoAddress: string | null = null;
    let daoTxHash: string | null = null;

    try {
      setCreationStatus(NewDaoStatus.PINNING_METADATA);
      const metadataUri = await client.methods.pinMetadata(newDaoParams.daoMetadata);
      const steps = client.methods.createDao({ ...newDaoParams, metadataUri });

      for await (const step of steps) {
        switch (step.key) {
          case DaoCreationSteps.CREATING:
            setDaoTxHash(step.txHash);
            onCreateDaoTransaction?.(step.txHash);
            daoTxHash = step.txHash;
            setCreationStatus(NewDaoStatus.CREATING_DAO);
            break;
          case DaoCreationSteps.DONE:
            setCreationStatus(NewDaoStatus.SUCCESS);
            daoAddress = step.address;
            setDaoAddress(step.address);
            break;
        }
      }
    } catch (err) {
      setCreationStatus(NewDaoStatus.ERROR);
      console.error(err);
      throw new Error("DAO creation failed");
    }
    return { daoAddress, daoTxHash };
  };

  const mutation = useMutation({
    mutationKey: ["newDao", ensSubdomain],
    mutationFn: async () =>
      createDao({
        daoMetadata,
        daoUri,
        ensSubdomain,
        trustedForwarder,
        plugins,
      }),
    onError,
    onMutate,
    onSettled,
    onSuccess,
  });

  return {
    ...mutation,
    daoAddress,
    daoTxHash,
    creationStatus,
  };
}
