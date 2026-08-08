import { ControllersApiErrorResponse, ControllersApiSuccessArrayString, ControllersApiSuccessServicesPulseWeek, ControllersApiWarningResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Pulse<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    latestList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesPulseWeek, ControllersApiErrorResponse | ControllersApiWarningResponse>>;
    weeksList: (query?: {
        limit?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayString, ControllersApiErrorResponse>>;
    pulseDetail: (week: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesPulseWeek, ControllersApiErrorResponse | ControllersApiWarningResponse>>;
}
//# sourceMappingURL=Pulse.d.ts.map