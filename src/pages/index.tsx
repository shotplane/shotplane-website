import PageSeoHeader from "@/components/SeoHeader";
import { SEOPages } from "@/lib/services/pageSeo/pageSeo.model";
import { useEffect, useState } from "react";

import { useLoader } from "../providers/loading.provider";
import { useToasts } from "../providers/toast.provider";
import { FaucetService } from "../lib/services/faucet/faucet.repo";
import { useFaucetProvider } from "../providers/faucet.provider";
import _ from "lodash";
import { Button } from "react-daisyui";
import { useWalletSelect } from "../providers/walletSelect.provider";
import { useAuth } from "../providers/auth.provider";
import { getCustomerToken } from "../lib/services/customer/customer.model";
import AuthLayout from "../layouts/Auth.layout";
export default function Login(props) {
  const { setLoading } = useLoader();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [setLoading]);
  return (
    <AuthLayout>
      <PageSeoHeader pageSEO={{ seoPage: SEOPages.HOME }} />
      
    </AuthLayout>
  );
}