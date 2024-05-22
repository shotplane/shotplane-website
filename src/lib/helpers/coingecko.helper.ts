// https://api.coingecko.com/

import Axios from "axios";
import { CoinGeckoMarket } from "../models/coingecko.model";

const host = `https://api.coingecko.com`;

class CoingeckoHelper {
  jwt = null;
  constructor() {}

  //   auth = () => {
  //     return Axios.post(
  //       `${host}/api/auth`,
  //       { username: USERNAME, password: PASS },
  //       { headers: { "Content-Type": "application/json" } }
  //     )
  //       .then((res) => {
  //         // console.log("res", res.data.jwt);
  //         this.jwt = res.data.jwt;
  //       })
  //       .catch((err) => {
  //         console.log("error", err);
  //         throw ErrorHelper.badToken();
  //       });
  //   };

  getMarket = async (): Promise<CoinGeckoMarket[]> => {
    try {
      const response = await Axios.get(
        `${host}/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
        {
          //   headers: { "Content-Type": "application/json", authorization: `Bearer ${this.jwt}` },
        }
      );
      // console.log("response", response);
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  };
}
const coingeckoHelper = new CoingeckoHelper();
export default coingeckoHelper;
