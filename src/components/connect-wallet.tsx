import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

import { Button } from "react-bootstrap";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { connectWallet } from "wallet/siwe";
interface ConnectWalletProps {
  buttonText?: string;
}

export const ConnectWallet: FC<ConnectWalletProps> = ({ buttonText }) => {
  const { open } = useWeb3Modal();
  const { status } = useAccount();
  const { logged } = useSelector((state: any) => state.user.data);

  useEffect(() => {
    if (status === "connected" && !logged) {
      connectWallet();
    }
  }, [status]);

  const handleConnect = () => {
    open({ view: "Connect" });
  };

  return (
    <>
      {buttonText ? (
        <Button
          type="button"
          className="btn btn-primary"
          onClick={handleConnect}
        >
          {buttonText}
        </Button>
      ) : (
        <Button
          type="button"
          className="btn btn-icon btn-topbar coin btn-ghost-dark rounded-circle text-muted"
          onClick={handleConnect}
        >
          <i className="bi bi-person fs-24 m-0"></i>
        </Button>
      )}
    </>
  );
};
