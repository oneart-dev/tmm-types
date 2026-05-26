import { ChatExportPayload, ControllersFeedNotificationAdminAnalyticsResponse, ControllersFeedNotificationAdminCreateResponse, ControllersFeedNotificationAdminDetailResponse, ControllersFeedNotificationAdminListResponse, ControllersFeedNotificationAdminUpdateResponse, ControllersFeedNotificationAdminVotesResponse, ControllersFeedNotificationThreadDetailResponse, ControllersFeedNotificationThreadInboxResponse, ControllersFeedNotificationThreadReplyResponse, ControllersUnauthorizedResponse, DtoChatErrorResponse, DtoFeedNotificationCommentCreateForm, DtoFeedNotificationCreateForm, DtoFeedNotificationUpdateForm } from "./data-contracts";
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
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationThreadInboxResponse, any>>;
    notificationThreadsDetail: (notificationId: number, userId: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationThreadDetailResponse, any>>;
    notificationThreadsReplyCreate: (notificationId: number, userId: number, payload: DtoFeedNotificationCommentCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationThreadReplyResponse, any>>;
    notificationsList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationAdminListResponse, any>>;
    notificationsCreate: (payload: DtoFeedNotificationCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationAdminCreateResponse, any>>;
    notificationsDetail: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationAdminDetailResponse, any>>;
    notificationsUpdate: (id: number, payload: DtoFeedNotificationUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationAdminUpdateResponse, any>>;
    notificationsDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<any, any>>;
    notificationsAnalyticsDetail: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationAdminAnalyticsResponse, any>>;
    notificationsPublishCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<any, any>>;
    notificationsVotesDetail: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationAdminVotesResponse, any>>;
}
//# sourceMappingURL=Admin.d.ts.map