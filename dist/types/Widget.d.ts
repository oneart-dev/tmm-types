import { ControllersApiErrorResponse, ControllersLoadWidgetResponse, ControllersUnauthorizedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Widget<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    publicLoadDetail: (code: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersLoadWidgetResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Widget.d.ts.map