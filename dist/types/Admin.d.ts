import { ChatExportPayload, ControllersApiSuccessResponse, ControllersUnauthorizedResponse, DtoChatErrorResponse, DtoFeedNotificationCreateForm, DtoFeedNotificationUpdateForm } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Admin<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    chatThreadsExportDetail: (uid: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ChatExportPayload, ControllersUnauthorizedResponse | DtoChatErrorResponse>>;
    notificationThreadsList: (query?: {
        notification_id?: number;
        page?: number;
        per_page?: number;
        sort?: "last_activity_desc" | "unanswered_first" | "oldest_unanswered_first";
        status?: "open" | "answered" | "all";
        type?: "global" | "personal";
        user_id?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<any, any>>;
    notificationThreadsDetail: (notificationId: string, userId: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<any, any>>;
    notificationThreadsReplyCreate: (notificationId: string, userId: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<any, any>>;
    notificationsList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<any, any>>;
    notificationsCreate: (payload: DtoFeedNotificationCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, any>>;
    notificationsDetail: (id: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<any, any>>;
    notificationsUpdate: (id: number, payload: DtoFeedNotificationUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<any, any>>;
    notificationsDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<any, any>>;
    notificationsAnalyticsDetail: (id: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<any, any>>;
    notificationsPublishCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<any, any>>;
    notificationsVotesDetail: (id: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<any, any>>;
}
//# sourceMappingURL=Admin.d.ts.map