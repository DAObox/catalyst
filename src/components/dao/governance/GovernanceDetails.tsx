import { truncate } from "@/lib/functions";
import GovernanceDivider from "./GovernanceDivider";
import { useState } from "react";

export default function GovernanceDetails() {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="w-full space-y-5 rounded-xl border border-gray-border bg-gray p-10">
      <div>
        <h3 className="text-xl font-bold text-lighter-gray">Details</h3>
      </div>
      <GovernanceDivider />
      <div>
        <div>
          <p className="text-light-gray">
            {readMore
              ? `
                                In a world increasingly reliant on blockchain technology, the Ethereum Name Service (ENS) emerges as a powerful tool, revolutionizing how we interact with the decentralized ecosystem. ENS is a distributed, open, and extensible naming system built on the Ethereum blockchain, offering a gateway to a more seamless and accessible decentralized future. Join us in this campaign to unveil the endless possibilities and benefits of the Ethereum Name Service.
                                Section 1: Unleashing the Power of ENS
                                Harnessing the Ethereum Blockchain: ENS leverages the robustness and security of the Ethereum blockchain to provide a reliable and decentralized naming system. By utilizing the distributed nature of Ethereum, ENS ensures censorship resistance, transparency, and immutability.
                                Simplifying Complex Addresses: ENS enables users to associate their Ethereum addresses with human-readable names, eliminating the need to remember lengthy and complicated cryptographic addresses. With ENS, sending transactions or interacting with decentralized applications becomes as simple as sending an email.
                                Section 2: Accessibility for All
                                Democratizing Blockchain: ENS breaks down the barriers to entry in the decentralized world by providing an intuitive and user-friendly system. Users, regardless of their technical expertise, can easily register and manage domain names, opening the doors of blockchain technology to a wider audience.
                                One Address, Multiple Purposes: With ENS, users can associate multiple services and decentralized applications with a single domain name. Whether it's websites, wallets, decentralized exchanges, or any other Ethereum-based service, ENS simplifies access by consolidating them under one easy-to-remember name.
                                Section 3: Extensibility and Innovation
                                Expanding Possibilities: ENS is designed to be highly extensible, allowing developers and entrepreneurs to build innovative applications on top of it. By integrating with ENS, developers can create decentralized services, unique NFTs, decentralized websites, and much more, unlocking a world of possibilities.
                                Future-proofing the Internet: ENS is not limited to the Ethereum blockchain alone. With the advent of ENS on other blockchains through bridges, ENS will act as a crucial bridge, connecting various blockchain ecosystems. This interoperability ensures the longevity and usefulness of ENS, making it a pivotal tool in the evolving decentralized landscape.
                            `
              : truncate(
                  `
                                In a world increasingly reliant on blockchain technology, the Ethereum Name Service (ENS) emerges as a powerful tool, revolutionizing how we interact with the decentralized ecosystem. ENS is a distributed, open, and extensible naming system built on the Ethereum blockchain, offering a gateway to a more seamless and accessible decentralized future. Join us in this campaign to unveil the endless possibilities and benefits of the Ethereum Name Service.
                                Section 1: Unleashing the Power of ENS
                                Harnessing the Ethereum Blockchain: ENS leverages the robustness and security of the Ethereum blockchain to provide a reliable and decentralized naming system. By utilizing the distributed nature of Ethereum, ENS ensures censorship resistance, transparency, and immutability.
                                Simplifying Complex Addresses: ENS enables users to associate their Ethereum addresses with human-readable names, eliminating the need to remember lengthy and complicated cryptographic addresses. With ENS, sending transactions or interacting with decentralized applications becomes as simple as sending an email.
                                Section 2: Accessibility for All
                                Democratizing Blockchain: ENS breaks down the barriers to entry in the decentralized world by providing an intuitive and user-friendly system. Users, regardless of their technical expertise, can easily register and manage domain names, opening the doors of blockchain technology to a wider audience.
                                One Address, Multiple Purposes: With ENS, users can associate multiple services and decentralized applications with a single domain name. Whether it's websites, wallets, decentralized exchanges, or any other Ethereum-based service, ENS simplifies access by consolidating them under one easy-to-remember name.
                                Section 3: Extensibility and Innovation
                                Expanding Possibilities: ENS is designed to be highly extensible, allowing developers and entrepreneurs to build innovative applications on top of it. By integrating with ENS, developers can create decentralized services, unique NFTs, decentralized websites, and much more, unlocking a world of possibilities.
                                Future-proofing the Internet: ENS is not limited to the Ethereum blockchain alone. With the advent of ENS on other blockchains through bridges, ENS will act as a crucial bridge, connecting various blockchain ecosystems. This interoperability ensures the longevity and usefulness of ENS, making it a pivotal tool in the evolving decentralized landscape.
                            `,
                  1000
                )}
          </p>
        </div>
        <button className="text-green focus:outline-none" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}
