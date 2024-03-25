import { ControllersApiErrorResponse, ControllersExchangesListResponse, ControllersTickersListResponse, ControllersUnauthorizedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Exchanges<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    exchangesList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersExchangesListResponse, string | ControllersUnauthorizedResponse>>;
    tickersList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersTickersListResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Exchanges.d.ts.map