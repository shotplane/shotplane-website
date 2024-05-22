import { RefObject, createContext, useContext, useEffect } from "react";
import { Modal } from "react-daisyui";
import WalletSelectionModal from "../components/WalletSelectionModal";
import { useAccount, useDisconnect } from "wagmi";
import { useAuth } from "./auth.provider";

const WalletSelectContext = createContext<
  Partial<{
    dialog: {
      dialogRef: RefObject<HTMLDialogElement>;
      Dialog: {
        ({ children, ...props }: any): JSX.Element;
        displayName: string;
      };
      handleShow: () => void;
      handleHide: () => void;
    };
  }>
>({});

const WalletSelectProvider = (props: any) => {
  const dialog = Modal.useDialog();

  const { address } = useAccount();
  const { disconnectAsync } = useDisconnect();
  const { auth, logout } = useAuth();

  useEffect(() => {
    if (auth) {
      //TODO :
      if (!auth.email && auth.address && auth.address !== address) {
        logout();
        disconnectAsync();
      }
    }
  }, [auth, address]);

  return (
    <WalletSelectContext.Provider
      value={{
        dialog,
      }}
    >
      {props.children}
      <WalletSelectionModal {...{ ...dialog }} />
    </WalletSelectContext.Provider>
  );
};

export default WalletSelectProvider;

export const useWalletSelect = () => useContext(WalletSelectContext);
