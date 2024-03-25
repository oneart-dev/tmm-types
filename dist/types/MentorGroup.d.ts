import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersMentorGroupResponse, ControllersMentorGroupsActiveResponse, ControllersMentorListResponse, ControllersMentorResponse, ControllersUnauthorizedResponse, DtoMentorGroupForm, DtoMentorGroupJoinRequestForm, DtoMentorNoteUpdateForm } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class MentorGroup<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    mentorGroupUpdate: (payload: DtoMentorGroupForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    mentorGroupList: (query?: {
        language?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersMentorListResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    activeList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersMentorGroupsActiveResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    inviteDetail: (invite: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersMentorResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    noteReadCreate: (tradeId: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    noteCreate: (userId: number, tradeId: number, payload: DtoMentorNoteUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    mentorGroupDetail: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersMentorGroupResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    mentorGroupCreate: (id: number, payload: DtoMentorGroupForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    mentorGroupDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    exitCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    joinUpdate: (id: number, payload: DtoMentorGroupJoinRequestForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    mentorGroupCreate2: (id: number, status: string, userId: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=MentorGroup.d.ts.map