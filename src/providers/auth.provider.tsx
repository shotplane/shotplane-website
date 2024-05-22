import { createContext, useContext, useEffect, useState } from "react";
import {
  Customer,
  clearCustomerToken,
  clearSignToken,
  getCustomerToken,
  getSignToken,
  setCustomerToken,
  setSignToken,
} from "@/lib/services/customer/customer.model";
import { CustomerService } from "@/lib/services/customer/customer.repo";
import { useRouter } from "next/router";
import { CustomerWalletType } from "@/lib/services/wallet/wallet.model";
import { useDisconnect } from "wagmi";

const AuthContext = createContext<
  Partial<{
    isLoading: boolean;
    loadProfile: () => void;
    loginByAddress: any;
    loginByGoogle: any;
    logout: () => void;
    auth?: Customer;
    token?: string;
  }>
>({});

const AuthProvider = (props: any) => {
  const [isLoading, setLoading] = useState(false);
  const [token, setToken] = useState<string>("");
  const router = useRouter();
  const [auth, setAuth] = useState<Customer>();

  // console.log("isLoading", isLoading);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const token = getCustomerToken(false);
      // console.log("token", token);
      const signToken = getSignToken(false);
      if (token) {
        setToken(token);
        const result = await CustomerService.customerGetMe(token, signToken);
        setAuth(result.data.customerGetMe);
      }
    } catch (error) {
      console.log(error);
      logout();
    }
  };

  const loginByAddress = async ({
    address,
    walletType,
    signToken,
  }: {
    address: string;
    walletType: CustomerWalletType;
    signToken?: string;
  }) => {
    try {
      const result = await CustomerService.loginByAddress({
        address,
        walletType,
      });
      // console.log("loginByAddress", result);
      const { customer, token } = result;
      setCustomerToken(token, false);
      setSignToken(signToken);
    } catch (error) {
      console.log(error);
    }
  };

  const loginByGoogle = async (idToken: string) => {
    try {
      const result = await CustomerService.loginByGoogle({ idToken });
      console.log("result", result);
      const { customer, token } = result;
      setCustomerToken(token, false);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    clearCustomerToken();
    clearSignToken();
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        auth,
        loginByAddress,
        loginByGoogle,
        loadProfile,
        logout,
        token
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
