import BlockchainBlock from "./BlockchainBlock";

export default function Mainnet() {
    return (
        <div className="grid grid-cols-4 gap-8">
            <BlockchainBlock name="Polygon" icon="/logos/polygon.png" />
            <BlockchainBlock name="Ethereum" icon="/logos/ethereum.png" />
        </div>
    )
}