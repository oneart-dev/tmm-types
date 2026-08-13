import { ControllersApiErrorResponse, ControllersApiSuccessNoData, ControllersApiWarningResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Email<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    unsubscribeList: (query: {
        token: string;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, void | ControllersApiErrorResponse | ControllersApiWarningResponse>>;
}
//# sourceMappingURL=Email.d.ts.map