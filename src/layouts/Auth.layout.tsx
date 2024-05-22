import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { Titillium_Web } from "next/font/google";
import PageSeoHeader from "../components/SeoHeader";
import { SEOPages } from "@/lib/services/pageSeo/pageSeo.model";
import { useSidebar } from "@/providers/sidebar.provider";
import { classNames } from "../lib/helpers/design";
import { useAuth } from "../providers/auth.provider";
import { useRouter } from "next/router";
import { getCustomerToken } from "../lib/services/customer/customer.model";
import { useLoader } from "../providers/loading.provider";
import { Drawer } from "react-daisyui";
import BottomActions from "./components/BottomActions";

const font = Titillium_Web({ subsets: ["latin"], weight: "600" });

const AuthLayout = ({ children }) => {
  const { setLoading } = useLoader();
  const { auth } = useAuth();
  const { sidebarVisible, toggleVisible } = useSidebar();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    setLoading(true);
    const token = getCustomerToken(false);

    setLoading(false);
  };

  return (
    <Drawer
      open={sidebarVisible}
      onClickOverlay={toggleVisible}
      side={<Sidebar />}
      end={true}
      className={classNames(font.className, "")}
    >
      <PageSeoHeader pageSEO={{ seoPage: SEOPages.HOME }} />
      <main className="max-w-md mx-auto">
        <div className="pb-20">
          {children}
          {/* <BottomActions /> */}
        </div>
      </main>
    </Drawer>
  );
};

export default AuthLayout;
