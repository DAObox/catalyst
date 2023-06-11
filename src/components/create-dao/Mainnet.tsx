import BlockchainBlock from "./BlockchainBlock";

export default function Mainnet() {
    return (
        <div className="grid grid-cols-4 gap-8">
        <BlockchainBlock name="Polygon" />
        <BlockchainBlock name="Ethereum" />
        </div>
    )
}