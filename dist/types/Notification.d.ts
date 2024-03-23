import { ControllersApiSuccessResponse, ControllersLatestNotificationsResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Notification<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    latestList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersLatestNotificationsResponse, any>>;
    interactCreate: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    seenCreate: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
}
//# sourceMappingURL=Notification.d.ts.map