import { ControllersExchangesListResponse, ControllersTickersListResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Exchanges<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    exchangesList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersExchangesListResponse, any>>;
    tickersList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersTickersListResponse, any>>;
}
//# sourceMappingURL=Exchanges.d.ts.map