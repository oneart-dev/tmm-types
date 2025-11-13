import { ControllersApiErrorResponse, ControllersApiSuccessArrayServicesTeamTopData, ControllersApiSuccessResponse, ControllersApiSuccessServicesTeam, ControllersApiSuccessServicesTeamMember, ControllersApiSuccessServicesTeamWithStatsAndMember, ControllersApiWarningResponse, ControllersUnauthorizedResponse, DtoTeamCreateForm, DtoTeamMemberCreateForm, DtoTeamMemberUpdateForm, DtoTeamUpdateForm, ServicesPaginationResponseArrayServicesTeamMember } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Team<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    teamUpdate: (payload: DtoTeamCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesTeam, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    teamDetail: (id: number, query?: {
        invite_code?: string;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesTeamWithStatsAndMember, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    teamCreate: (id: number, payload: DtoTeamUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    teamDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
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
        exchange_id?: (1 | 2 | 3 | 4 | 5 | 6 | 7 | 41 | 8 | 9 | 10 | 40 | 46 | 11 | 21 | 23 | 24 | 25 | 12 | 22 | 13 | 14 | 15 | 32 | 33 | 42 | 43 | 44 | 45 | 50)[];
        period: "today" | "yesterday" | "7days" | "14days" | "30days" | "custom";
        sortAsc?: "true" | "false";
        type: "pnl" | "percent" | "volume";
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesTeamTopData, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Team.d.ts.map