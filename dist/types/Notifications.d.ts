import { ControllersApiSuccessArrayServicesFeedNotificationFeedItem, ControllersApiSuccessArrayServicesFile, ControllersApiSuccessControllersFeedNotificationLikeData, ControllersApiSuccessNoData, ControllersApiSuccessServicesFeedNotificationComment, ControllersApiSuccessServicesSSEFeedNotificationEventCatalog, ControllersApiWarningResponse, ControllersUnauthorizedResponse, DtoFeedNotificationCommentCreateForm, DtoFeedNotificationCommentUpdateForm, DtoFeedNotificationVoteForm } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Notifications<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    notificationsList: (query?: {
        page?: number;
        per_page?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesFeedNotificationFeedItem, ControllersUnauthorizedResponse>>;
    seenAllCreate: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, ControllersUnauthorizedResponse>>;
    sseEventsList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesSSEFeedNotificationEventCatalog, any>>;
    commentsCreate: (id: number, payload: DtoFeedNotificationCommentCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesFeedNotificationComment, any>>;
    commentsUpdate: (id: number, cid: number, payload: DtoFeedNotificationCommentUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesFeedNotificationComment, any>>;
    commentsDelete: (id: number, cid: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    commentsImageCreate: (id: number, cid: number, data: {
        files: File;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesFile, any>>;
    likeCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessControllersFeedNotificationLikeData, any>>;
    seenCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    threadSeenCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    voteCreate: (id: number, payload: DtoFeedNotificationVoteForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, ControllersApiWarningResponse>>;
}
//# sourceMappingURL=Notifications.d.ts.map