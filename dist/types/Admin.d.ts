import { ChatExportPayload, ControllersApiSuccessArrayServicesFeedNotificationAdminListItem, ControllersApiSuccessArrayServicesFeedNotificationRawVote, ControllersApiSuccessControllersFeedNotificationAdminCreateData, ControllersApiSuccessControllersFeedNotificationAdminUpdateData, ControllersApiSuccessNoData, ControllersApiSuccessServicesFeedNotificationAnalyticsCounts, ControllersApiSuccessServicesFeedNotificationComment, ControllersFeedNotificationAdminDetailResponse, ControllersFeedNotificationThreadDetailResponse, ControllersFeedNotificationThreadInboxResponse, ControllersUnauthorizedResponse, DtoChatErrorResponse, DtoFeedNotificationCommentCreateForm, DtoFeedNotificationCreateForm, DtoFeedNotificationUpdateForm, DtoTicketQuickCreateForm, DtoTicketStatusUpdateForm } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Admin<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    chatThreadsExportDetail: (uid: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ChatExportPayload, ControllersUnauthorizedResponse | DtoChatErrorResponse>>;
    notificationThreadsList: (query?: {
        kind?: "notification" | "ticket";
        notification_id?: number;
        page?: number;
        per_page?: number;
        search?: string;
        sort?: "last_activity_desc" | "unanswered_first" | "oldest_unanswered_first" | "newest_activity" | "oldest_activity" | "oldest_unanswered";
        status?: "open" | "answered" | "all" | "pending" | "resolved";
        ticket_uid?: string;
        type?: "global" | "personal";
        user_id?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationThreadInboxResponse, any>>;
    notificationThreadsDetail: (notificationId: number, userId: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationThreadDetailResponse, any>>;
    notificationThreadsReplyCreate: (notificationId: number, userId: number, payload: DtoFeedNotificationCommentCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesFeedNotificationComment, any>>;
    notificationsList: (query?: {
        type?: string;
        kind?: string;
        status?: string;
        page?: number;
        per_page?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesFeedNotificationAdminListItem, any>>;
    notificationsCreate: (payload: DtoFeedNotificationCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessControllersFeedNotificationAdminCreateData, any>>;
    notificationsDetail: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationAdminDetailResponse, any>>;
    notificationsUpdate: (id: number, payload: DtoFeedNotificationUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessControllersFeedNotificationAdminUpdateData, any>>;
    notificationsDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    notificationsAnalyticsDetail: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesFeedNotificationAnalyticsCounts, any>>;
    notificationsPublishCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    notificationsStatusPartialUpdate: (id: number, payload: DtoTicketStatusUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    notificationsVotesDetail: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesFeedNotificationRawVote, any>>;
    usersTicketsCreate: (id: number, payload: DtoTicketQuickCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessControllersFeedNotificationAdminCreateData, any>>;
}
//# sourceMappingURL=Admin.d.ts.map