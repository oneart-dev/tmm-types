import { ControllersApiErrorResponse, ControllersApiSuccessServicesExchangeRequest, ControllersUnauthorizedResponse, DtoExchangeRequestCreateForm, ServicesValidationErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class ExchangeRequests<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    exchangeRequestsCreate: (payload: DtoExchangeRequestCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesExchangeRequest, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse | ServicesValidationErrorResponse>>;
}
//# sourceMappingURL=ExchangeRequests.d.ts.map