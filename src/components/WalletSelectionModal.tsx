import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { classNames } from "@/lib/helpers/design";
import {
  clearReferralCode,
  Customer,
  getReferalCode,
  setCustomerToken,
  setSignToken,
} from "@/lib/services/customer/customer.model";
import {
  CustomerWalletType,
  customerWalletTypeData,
  walletObjects,
} from "@/lib/services/wallet/wallet.model";
import { useToasts } from "@/providers/toast.provider";
// import { useWeb3js } from "@/providers/web3.provider";
import { AiOutlineWallet } from "react-icons/ai";
import { useLoader } from "@/providers/loading.provider";
import Image from "next/image";
import { useAuth } from "@/providers/auth.provider";
import { useAccount, useConnect, useDisconnect, useSignMessage } from "wagmi";
import { useSettings } from "@/providers/setting.provider";
import { SettingKey } from "@/lib/helpers/setting.helper";
import { Button, Modal } from "react-daisyui";
import { FaTimes } from "react-icons/fa";

const WalletSelectionModal = ({ Dialog, handleShow, handleHide }) => {
  const router = useRouter();
  const toast = useToasts();
  const { getSetting } = useSettings();

  const { setLoading } = useLoader();
  const { auth, loginByAddress, logout } = useAuth();

  const [currentType, setCurrentType] = useState<CustomerWalletType>();

  const { address, isConnected } = useAccount();

  const { signMessageAsync } = useSignMessage();

  const { disconnect } = useDisconnect();


  const { connect, connectors, isLoading, pendingConnector } = useConnect({
    onSuccess: async (data, variables, context) => {
      const { account, chain } = data;
      await loginByAddress({
        address: account,
        walletType: CustomerWalletType.METAMASK,
      });

      const nonce = getSetting(SettingKey.NONCE_CODE);

      const signToken = await signMessageAsync({ message: `${nonce}` });

      // console.log("signToken", signToken);

      window.location.assign("/");
    },
    onError: async (error, variables, context) => {
      console.log("error", { error, variables, context });
      if (error.name === "ConnectorNotFoundError") {
        toast.error("Please install Metamask wallet");
        disconnect();
      }
      if (error.name === "UserRejectedRequestError") {
        toast.warn("Please connect your wallet to sign in. Thank you.");
        disconnect();
      }
      if (error.name === "ConnectorAlreadyConnectedError") {
        toast.info("Connected");
        disconnect();
      }
      if (variables.connector.id === "metaMask") {
        toast.error(
          "Login Failed. Please restart your wallet app."
        );
        disconnect();
      }
    },
  });

  // console.log("connectors", connectors);

  return (
    <Dialog className={classNames("relative bg-white")} title="Connect wallet">
      <form method="dialog">
        <Button
          size="sm"
          color="ghost"
          shape="circle"
          className="absolute right-2 top-2"
        >
          <FaTimes />
        </Button>
      </form>
      <Modal.Header>
        Sign in by connecting to one of the wallets below.
      </Modal.Header>
      <Modal.Body>
        <div className="flex gap-5 justify-center">
          <div>
            {connectors.map((connector) => (
              <button
                color="ghost"
                className={classNames(
                  "flex gap-2 rounded text-16",
                  "border border-gray-300 px-8 py-2.5"
                )}
                // disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}
              >
                <Image
                  height={24}
                  width={24}
                  src="/images/wallet/metamask.webp"
                  alt="metamask"
                />
                <span>
                  {connector.name}
                  {/* {!connector.ready && " (unsupported)"}
              {isLoading &&
                connector.id === pendingConnector?.id &&
                " (connecting)"} */}
                </span>
              </button>
            ))}
          </div>
          <div className="flex justify-center items-center">
            {/* <LoginByGoogleBtn /> */}
          </div>
        </div>
      </Modal.Body>
    </Dialog>
  );
};

export default WalletSelectionModal;
