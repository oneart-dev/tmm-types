import { ControllersApiErrorResponse, ControllersApiSuccessServicesMarketSubscribeResult, ControllersApiWarningResponse, ControllersMarketStartData, ControllersMarketSubscribeForm, ControllersUnauthorizedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Market<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    streamList: (query?: {
        connection_id?: string;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersMarketStartData, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    subscribeCreate: (form: ControllersMarketSubscribeForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesMarketSubscribeResult, ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Market.d.ts.map