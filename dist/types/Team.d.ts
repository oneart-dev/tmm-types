import { ControllersApiErrorResponse, ControllersApiSuccessArrayServicesFeedNotificationUser, ControllersApiSuccessArrayServicesTeamChatRoom, ControllersApiSuccessArrayServicesTeamTopData, ControllersApiSuccessArrayServicesTeamWidgetConfig, ControllersApiSuccessArrayServicesTeamWithStatsAndMember, ControllersApiSuccessArrayServicesWidgetValue, ControllersApiSuccessNoData, ControllersApiSuccessResponse, ControllersApiSuccessServicesFeedNotificationComment, ControllersApiSuccessServicesTeam, ControllersApiSuccessServicesTeamChatRoom, ControllersApiSuccessServicesTeamChatRoomDetail, ControllersApiSuccessServicesTeamMember, ControllersApiSuccessServicesTeamWithStatsAndMember, ControllersApiSuccessServicesWidgetValue, ControllersApiWarningResponse, ControllersUnauthorizedResponse, DtoFeedNotificationCommentCreateForm, DtoTeamChatMuteForm, DtoTeamChatRoleForm, DtoTeamChatRoomCreateForm, DtoTeamCreateForm, DtoTeamMemberCreateForm, DtoTeamMemberUpdateForm, DtoTeamUpdateForm, DtoTeamWidgetForm, ServicesPaginationResponseArrayServicesTeamMember } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Team<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    teamList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesTeamWithStatsAndMember, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    teamUpdate: (payload: DtoTeamCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesTeam, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    teamDetail: (id: number, query?: {
        invite_code?: string;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesTeamWithStatsAndMember, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    teamCreate: (id: number, payload: DtoTeamUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    teamDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
    chatRoomsDetail: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesTeamChatRoom, any>>;
    chatRoomsCreate: (id: number, body: DtoTeamChatRoomCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesTeamChatRoom, any>>;
    chatRoomsDetail2: (id: number, roomId: number, query?: {
        before?: number;
        limit?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesTeamChatRoomDetail, any>>;
    chatRoomsDelete: (id: number, roomId: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    chatRoomsCommentCreate: (id: number, roomId: number, body: DtoFeedNotificationCommentCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesFeedNotificationComment, any>>;
    chatRoomsCommentsDetail: (id: number, roomId: number, query?: {
        before?: number;
        limit?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesTeamChatRoomDetail, any>>;
    chatRoomsJoinCreate: (id: number, roomId: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    chatRoomsLeaveCreate: (id: number, roomId: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    chatRoomsMembersDetail: (id: number, roomId: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesFeedNotificationUser, any>>;
    chatRoomsMembersBanCreate: (id: number, roomId: number, userId: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    chatRoomsMembersMuteCreate: (id: number, roomId: number, userId: number, body: DtoTeamChatMuteForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    chatRoomsMembersRoleCreate: (id: number, roomId: number, userId: number, body: DtoTeamChatRoleForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    chatRoomsMembersUnbanCreate: (id: number, roomId: number, userId: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    chatRoomsMuteCreate: (id: number, roomId: number, body: DtoTeamChatMuteForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    chatRoomsSeenCreate: (id: number, roomId: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    joinUpdate: (id: number, payload: DtoTeamMemberCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesTeamMember, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    joinCreate: (id: number, userId: number, payload: DtoTeamMemberUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    membersDetail: (id: number, query?: {
        page?: number;
        itemsPerPage?: number;
        sortBy?: string;
        sortDesc?: boolean;
        name?: string;
        show_pnl?: 1 | 2;
        status?: 1 | 2 | 3 | 4;
        user_id?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesPaginationResponseArrayServicesTeamMember, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    getTeam: (id: number, query: {
        exchange_id?: (1 | 2 | 3 | 4 | 5 | 6 | 7 | 41 | 8 | 9 | 10 | 40 | 46 | 11 | 21 | 23 | 24 | 25 | 12 | 22 | 13 | 14 | 15 | 32 | 33 | 42 | 43 | 44 | 45 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57)[];
        period: "today" | "yesterday" | "7days" | "14days" | "30days" | "custom";
        sortAsc?: "true" | "false";
        type: "pnl" | "percent" | "volume";
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesTeamTopData, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    widgetValuesDetail: (id: number, query?: {
        period?: string;
        from?: number;
        to?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesWidgetValue, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    widgetsDetail: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesTeamWidgetConfig, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    widgetsUpdate: (id: number, payload: DtoTeamWidgetForm[], params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    widgetsDetail2: (id: number, key: string, query?: {
        period?: string;
        from?: number;
        to?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesWidgetValue, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Team.d.ts.map