import { createContext, useContext, useEffect, useState } from "react";
import { Setting } from "@/lib/services/setting/setting.model";
import { SettingService } from "@/lib/services/setting/setting.repo";
import { useQuery } from "@tanstack/react-query";
import { SettingKey, initSettings } from "@/lib/helpers/setting.helper";

const SettingContext = createContext<
  Partial<{
    isLoading: boolean;
    loadSettings: any;
    getSetting: any;
    settings: Setting[];
  }>
>({});

const SettingProvider = (props: any) => {
  const [isLoading, setLoading] = useState(false);
  const [settings, setSettings] = useState<Setting[]>();

  useEffect(()=>{
    loadSettings()
  },[])

  const loadSettings = async () => {
    setLoading(true);
    try {
      const result = await SettingService.getAll({
        cache: false,
        query: {
          limit: 9999,
          filter: {
            key: {
              __in: initSettings,
            },
          },
        },
      });
      setSettings(result.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  //   console.log("settings", settings);

  const getSetting = (key: SettingKey): any => {
    if (settings) {
      return settings.find((set) => set.key === key)?.value;
    }
  };

  return (
    <SettingContext.Provider
      value={{ isLoading, settings, loadSettings, getSetting }}
    >
      {props.children}
    </SettingContext.Provider>
  );
};

export default SettingProvider;

export const useSettings = () => useContext(SettingContext);
