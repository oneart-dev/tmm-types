import { ControllersApiErrorResponse, ControllersApiSuccessNoData, ControllersApiSuccessString, ServicesValidationErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    oauth2Create: (query: {
        response_type?: string;
        client_id: string;
        redirect_uri?: string;
        state?: string;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessString, ServicesValidationErrorResponse>>;
    redeemCreate: (code: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
}
//# sourceMappingURL=User.d.ts.map