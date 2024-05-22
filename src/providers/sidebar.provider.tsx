import { createContext, useCallback, useContext, useState } from "react";

const SidebarContext = createContext<
  Partial<{
    sidebarVisible: boolean;
    toggleVisible: any;
  }>
>({});

const SidebarProvider = (props: any) => {
  const [sidebarVisible, setVisible] = useState(false);
  const toggleVisible = useCallback(() => {
    setVisible((visible) => !visible);
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        sidebarVisible,
        toggleVisible,
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;

export const useSidebar = () => useContext(SidebarContext)