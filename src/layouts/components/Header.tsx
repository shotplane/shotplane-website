import { Badge, Button, Dropdown, Menu, Navbar } from "react-daisyui";
import { FaHome, FaList, FaSignInAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import HeaderButton from "./HeaderButton";
import { useSidebar } from "@/providers/sidebar.provider";

const Header = () => {
  return (
    <Navbar className="w-full bg-base-200">
      <div className="flex-1 px-2 mx-2">
        {/* <Link href={"/"}>
            <Image src={"/images/logo.svg"} alt="logo" width={30} height={30} />
          </Link> */}
        <Image src={"/images/logo.svg"} alt="logo" width={30} height={30} />
      </div>

      <MobileToggle />

      <div className="flex-none hidden lg:block">
        <Menu horizontal={true} className="gap-2">
          <Menu.Item>
            {/* <Link href={"/"}>
              <FaHome />
              Home
            </Link> */}
          </Menu.Item>
          {/* <NetworkSelect /> */}
          <HeaderButton />
        </Menu>
      </div>
    </Navbar>
  );
};

export default Header;

const MobileToggle = () => {
  const { toggleVisible } = useSidebar();

  return (
    <div className="flex-none lg:hidden">
      <Button shape="square" color="ghost" onClick={toggleVisible}>
        <FaList size={20} />
      </Button>
    </div>
  );
};
