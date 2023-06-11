import BlockchainBlock from "./BlockchainBlock";

export default function Testnet() {
    return(
        <div className="grid grid-cols-4 gap-8">
            <BlockchainBlock name="Mumbai" />
            <BlockchainBlock name="Goerli" />
        </div>
    )
}