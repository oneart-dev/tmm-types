import { ControllersApiSuccessResponse, ControllersMentorGroupResponse, ControllersMentorGroupsActiveResponse, ControllersMentorListResponse, ControllersMentorResponse, DtoMentorGroupForm, DtoMentorGroupJoinRequestForm, DtoMentorNoteUpdateForm } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class MentorGroup<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    mentorGroupUpdate: (payload: DtoMentorGroupForm, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    mentorGroupList: (query?: {
        language?: number;
    }, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersMentorListResponse, any>>;
    activeList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersMentorGroupsActiveResponse, any>>;
    inviteDetail: (invite: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersMentorResponse, any>>;
    noteReadCreate: (tradeId: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    noteCreate: (userId: number, tradeId: number, payload: DtoMentorNoteUpdateForm, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    mentorGroupDetail: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersMentorGroupResponse, any>>;
    mentorGroupCreate: (id: number, payload: DtoMentorGroupForm, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    mentorGroupDelete: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    exitCreate: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    joinUpdate: (id: number, payload: DtoMentorGroupJoinRequestForm, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    mentorGroupCreate2: (id: number, status: string, userId: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
}
//# sourceMappingURL=MentorGroup.d.ts.map