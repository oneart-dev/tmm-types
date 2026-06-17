import { ChatExportPayload, ControllersApiErrorResponse, ControllersApiSuccessArrayServicesFeedNotificationAdminListItem, ControllersApiSuccessArrayServicesFeedNotificationRawVote, ControllersApiSuccessArrayServicesFleetInstanceDTO, ControllersApiSuccessArrayServicesFleetNodeDTO, ControllersApiSuccessControllersFeedNotificationAdminCreateData, ControllersApiSuccessNoData, ControllersApiSuccessServicesFeedNotificationAnalyticsCounts, ControllersApiSuccessServicesFeedNotificationComment, ControllersFeedNotificationAdminDetailResponse, ControllersFeedNotificationAdminUpdateResponse, ControllersFeedNotificationThreadDetailResponse, ControllersFeedNotificationThreadInboxResponse, ControllersUnauthorizedResponse, DtoChatErrorResponse, DtoFeedNotificationCommentCreateForm, DtoFeedNotificationConversationStatusForm, DtoFeedNotificationCreateForm, DtoFeedNotificationUpdateForm, DtoTicketQuickCreateForm, ServicesPaginationResponseArrayServicesFleetActivityDTO } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Admin<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    chatThreadsExportDetail: (uid: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ChatExportPayload, ControllersUnauthorizedResponse | DtoChatErrorResponse>>;
    notificationThreadsList: (query?: {
        kind?: "notification" | "ticket";
        notification_id?: number;
        page?: number;
        per_page?: number;
        search?: string;
        status?: "open" | "pending_user" | "in_progress" | "resolved";
        ticket_uid?: string;
        type?: "global" | "personal";
        user_id?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationThreadInboxResponse, any>>;
    notificationThreadsDetail: (notificationId: number, userId: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationThreadDetailResponse, any>>;
    notificationThreadsReplyCreate: (notificationId: number, userId: number, payload: DtoFeedNotificationCommentCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesFeedNotificationComment, any>>;
    notificationThreadsSeenCreate: (notificationId: number, userId: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    notificationThreadsStatusPartialUpdate: (notificationId: number, userId: number, payload: DtoFeedNotificationConversationStatusForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    notificationsList: (query?: {
        type?: string;
        kind?: string;
        status?: string;
        event_kind?: string;
        author?: number;
        page?: number;
        per_page?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesFeedNotificationAdminListItem, any>>;
    notificationsCreate: (payload: DtoFeedNotificationCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessControllersFeedNotificationAdminCreateData, any>>;
    notificationsDetail: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationAdminDetailResponse, any>>;
    notificationsUpdate: (id: number, payload: DtoFeedNotificationUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationAdminUpdateResponse, any>>;
    notificationsDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    notificationsAnalyticsDetail: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesFeedNotificationAnalyticsCounts, any>>;
    notificationsPublishCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    notificationsVotesDetail: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesFeedNotificationRawVote, any>>;
    usersTicketsCreate: (id: number, payload: DtoTicketQuickCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessControllersFeedNotificationAdminCreateData, any>>;
    fleetActivityList: (query?: {
        page?: number;
        itemsPerPage?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesPaginationResponseArrayServicesFleetActivityDTO, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    fleetInstancesList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesFleetInstanceDTO, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    fleetNodesList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesFleetNodeDTO, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Admin.d.ts.map