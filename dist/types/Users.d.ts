import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersBulkSignUpSuccessResponse, ControllersLoginSuccessResponse, ControllersPublicProfileResponse, ControllersPublicProfileStatsResponse, ControllersReferralSummaryResponse, ControllersTopTradersSuccessResponse, DtoPasswordResetCredentials, DtoPublicProfileUpdateForm, DtoUserLanguage, DtoUserReferralCode, DtoUserTheme, DtoUserUpdateForm, ServicesGuideProgress, ServicesTradesListPagination, ServicesValidationErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Users<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    usersCreate: (payload: DtoUserUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersLoginSuccessResponse, string | ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    bulkCreateCreate: (payload: string[], params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersBulkSignUpSuccessResponse, string | ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    cvizorTogglerCreate: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | void | ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    emailCreate: (payload: DtoPasswordResetCredentials, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    guideCreate: (payload: ServicesGuideProgress, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | void | ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    languageCreate: (payload: DtoUserLanguage, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | void | ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    myPublicProfileList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersPublicProfileResponse, string | void>>;
    publicProfileCreate: (id: number, payload: DtoPublicProfileUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | void | ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    publicStatsList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersPublicProfileStatsResponse, string | void>>;
    publicDetail: (url: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersPublicProfileResponse, string | void>>;
    publicStatsDetail: (url: string, query?: {
        durationType?: string;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersPublicProfileStatsResponse, string | void>>;
    publicTradesDetail: (url: string, query?: {
        page?: number;
        sortBy?: string;
        sortDesc?: boolean;
        itemsPerPage?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesTradesListPagination, string | void>>;
    referralCodeCreate: (payload: DtoUserReferralCode, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | void | ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    themeCreate: (payload: DtoUserTheme, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | void | ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    topTradersDetail: (league: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersTopTradersSuccessResponse, string | void>>;
    referralsSummaryDetail: (id: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersReferralSummaryResponse, string | void>>;
}
//# sourceMappingURL=Users.d.ts.map