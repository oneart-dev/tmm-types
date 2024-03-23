import { ControllersHotCoinsResponse, ControllersLongShortRatioResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Stats<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    longShortRatioList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersLongShortRatioResponse, any>>;
    topCoinsList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersHotCoinsResponse, any>>;
}
//# sourceMappingURL=Stats.d.ts.map