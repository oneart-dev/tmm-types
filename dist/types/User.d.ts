import { ControllersApiErrorResponse, ControllersApiSuccessNoData, ServicesValidationErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    redeemCreate: (code: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, string | void | ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
}
//# sourceMappingURL=User.d.ts.map