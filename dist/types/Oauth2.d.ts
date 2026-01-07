import { ControllersApiErrorResponse, ControllersApiSuccessServicesApiUser, ControllersUnauthorizedResponse, DtoOauth2SwapForm } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Oauth2<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    getOauth2: (key: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<void, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    tokenCreate: (payload: DtoOauth2SwapForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesApiUser, ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Oauth2.d.ts.map