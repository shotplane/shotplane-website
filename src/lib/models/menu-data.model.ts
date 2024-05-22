export type MenuData = {
  code?: string;
  name?: string;
  title?: string;
  description?: string;
  header?: string;
  url?: string;
  image?: string;
  frame?: string;
  keywords?: string;
  catergoryCode?: string;
  active?: boolean;
  Icon?: any;
  HoveredIcon?: any;
  settingKey?: string;
  children?: MenuData[];
  imageUrl?: string;
  imageActive?: string;
};

export type MenuCategory = {
  name?: string;
  code?: string;
};

export const getMenu = ({
  auth,
  adminMenusData,
  memberMenusData,
  expiredMemberMenusData,
}: {
  auth: any;
  adminMenusData: MenuData[];
  memberMenusData: MenuData[];
  expiredMemberMenusData: MenuData[];
}): MenuData[] => {
  let menu = null;
  // if ([UserRole.ADMIN, UserRole.EDITOR].includes(auth.role)) {
  //     menu = adminMenusData
  // }
  // if (auth.role === UserRole.MEMBER) {
  //     if (auth.serviceStatus === UserServiceStatus.EXPIRED) {
  //         menu = expiredMemberMenusData;
  //     }
  //     else {
  //         menu = memberMenusData
  //     }
  // }
  return menu;
};
