import { ChatExportPayload, ControllersApiErrorResponse, ControllersApiSuccessArrayServicesArtifact, ControllersApiSuccessArrayServicesArtifactVersionDTO, ControllersApiSuccessArrayServicesFeedNotificationAdminListItem, ControllersApiSuccessArrayServicesFeedNotificationRawVote, ControllersApiSuccessArrayServicesFleetInstanceDTO, ControllersApiSuccessArrayServicesFleetNodeDTO, ControllersApiSuccessControllersFeedNotificationAdminCreateData, ControllersApiSuccessNoData, ControllersApiSuccessServicesFeedNotificationAnalyticsCounts, ControllersApiSuccessServicesFeedNotificationComment, ControllersApiWarningResponse, ControllersFeedNotificationAdminDetailResponse, ControllersFeedNotificationAdminUpdateResponse, ControllersFeedNotificationThreadDetailResponse, ControllersFeedNotificationThreadInboxResponse, ControllersFleetSetTargetVersionForm, ControllersUnauthorizedResponse, DtoChatErrorResponse, DtoFeedNotificationCommentCreateForm, DtoFeedNotificationConversationStatusForm, DtoFeedNotificationCreateForm, DtoFeedNotificationUpdateForm, DtoTicketQuickCreateForm, ServicesPaginationResponseArrayServicesFleetActivityDTO } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Admin<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    chatThreadsExportDetail: (uid: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ChatExportPayload, ControllersUnauthorizedResponse | DtoChatErrorResponse>>;
    fleetActivityList: (query?: {
        page?: number;
        itemsPerPage?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesPaginationResponseArrayServicesFleetActivityDTO, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    fleetArtifactVersionsList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesArtifactVersionDTO, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    fleetArtifactsList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesArtifact, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    fleetArtifactsCreate: (data: {
        package: File;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    fleetExchangesTargetVersionCreate: (exchangeId: number, body: ControllersFleetSetTargetVersionForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
    fleetInstancesList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesFleetInstanceDTO, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    fleetInstancesDrainCreate: (id: number, exchangeId: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
    fleetInstancesUndrainCreate: (id: number, exchangeId: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    fleetNodesList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesFleetNodeDTO, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
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
}
//# sourceMappingURL=Admin.d.ts.map