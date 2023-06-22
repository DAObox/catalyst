import {
  type Client,
  type DaoListItem,
  type IDaoQueryParams,
} from "@aragon/sdk-client";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { type QueryConfig } from "typings/typings";
import { useAragon } from "@/contexts/AragonContext";

export function useFetchDaos(params: UseFetchDaosParams): UseFetchDaosResults {
  const { baseClient: client } = useAragon();
  const { sortBy, direction, limit, skip } = params;

  return useQuery<DaoListItem[] | null, unknown>({
    queryKey: ["daos", limit],
    queryFn: async () =>
      (client as Client).methods.getDaos({
        limit: limit || 10, // optional,
        sortBy,
        direction,
        skip,
      }),
    enabled: !!client,
  });
}

export interface UseFetchDaosParams
  extends Partial<IDaoQueryParams>,
    QueryConfig<DaoListItem[] | null> {}

export type UseFetchDaosResults = UseQueryResult<DaoListItem[] | null, unknown>;
