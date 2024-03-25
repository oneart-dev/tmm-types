import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersApiWarningResponse, ControllersLatestNotificationsResponse, ControllersUnauthorizedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Notification<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    latestList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersLatestNotificationsResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    interactCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
    seenCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Notification.d.ts.map