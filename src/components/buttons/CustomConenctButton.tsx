import { Button } from "@material-tailwind/react";
import { useConnectModal } from "@rainbow-me/rainbowkit";

export default function CustomConnectButton() {
    
    const { openConnectModal } = useConnectModal();

    return (
        <Button
            onClick={openConnectModal}
            className="bg-green px-5 py-4 rounded-xl text-white"
        >Connect Wallet</Button>
    )
}