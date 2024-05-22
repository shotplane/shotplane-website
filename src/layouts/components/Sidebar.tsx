import { useSidebar } from "@/providers/sidebar.provider";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Button, Drawer, Menu } from "react-daisyui";
import { FaCogs, FaHome, FaSignOutAlt } from "react-icons/fa";
import HeaderButton from "./HeaderButton";
import { useDisconnect } from "wagmi";
import { useRouter } from "next/router";

const Sidebar = () => {
  const { toggleVisible } = useSidebar();
  const { disconnectAsync } = useDisconnect();

  const logoutAccountWallet = async () => {
    await disconnectAsync();
  };

  return (
    <Menu className="p-4 w-60 md:w-80 h-full bg-base-200">
      <Menu.Item onClick={toggleVisible}>
        <Link href={"/"}>
          <FaHome />
          Home
        </Link>
      </Menu.Item>

      <HeaderButton />
    </Menu>
  );
};

export default Sidebar;
