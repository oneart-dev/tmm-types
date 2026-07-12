import { ControllersApiWarningResponse, ControllersDemoSessionSuccessResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Demo<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    sessionCreate: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersDemoSessionSuccessResponse, string | ControllersApiWarningResponse>>;
}
//# sourceMappingURL=Demo.d.ts.map