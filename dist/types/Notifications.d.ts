import { ControllersApiSuccessResponse, ControllersApiWarningResponse, ControllersFeedNotificationCommentImageUploadResponse, ControllersFeedNotificationCommentResponse, ControllersFeedNotificationFeedResponse, ControllersFeedNotificationLikeResponse, ControllersUnauthorizedResponse, DtoFeedNotificationCommentCreateForm, DtoFeedNotificationCommentUpdateForm, DtoFeedNotificationVoteForm } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Notifications<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    notificationsList: (query?: {
        page?: number;
        per_page?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationFeedResponse, ControllersUnauthorizedResponse>>;
    commentsCreate: (id: number, payload: DtoFeedNotificationCommentCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationCommentResponse, any>>;
    commentsUpdate: (id: number, cid: number, payload: DtoFeedNotificationCommentUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationCommentResponse, any>>;
    commentsDelete: (id: string, cid: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<any, any>>;
    commentsImageCreate: (id: number, cid: number, data: {
        files: File;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationCommentImageUploadResponse, any>>;
    likeCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFeedNotificationLikeResponse, any>>;
    seenCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, any>>;
    voteCreate: (id: number, payload: DtoFeedNotificationVoteForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, ControllersApiWarningResponse>>;
}
//# sourceMappingURL=Notifications.d.ts.map