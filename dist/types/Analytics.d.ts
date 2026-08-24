import { ControllersApiErrorResponse, ControllersApiSuccessArrayServicesActivationRow } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Analytics<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    activationList: (query?: {
        weeks?: number;
        dimension?: "attribution_source";
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesActivationRow, ControllersApiErrorResponse>>;
}
//# sourceMappingURL=Analytics.d.ts.map