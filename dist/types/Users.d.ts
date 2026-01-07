import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersBulkSignUpSuccessResponse, ControllersLoginSuccessResponse, ControllersPublicProfileResponse, ControllersPublicProfileStatsResponse, ControllersReferralSummaryResponse, ControllersTopTradersSuccessResponse, DtoPasswordResetCredentials, DtoPublicProfileUpdateForm, DtoUserLanguage, DtoUserReferralCode, DtoUserTheme, DtoUserUpdateForm, ServicesGuideProgress, ServicesTradesListPagination, ServicesValidationErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Users<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    usersCreate: (payload: DtoUserUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersLoginSuccessResponse, ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    bulkCreateCreate: (payload: string[], params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersBulkSignUpSuccessResponse, ServicesValidationErrorResponse>>;
    cvizorTogglerCreate: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, ControllersApiErrorResponse>>;
    emailCreate: (payload: DtoPasswordResetCredentials, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    guideCreate: (payload: ServicesGuideProgress, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, ServicesValidationErrorResponse>>;
    languageCreate: (payload: DtoUserLanguage, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, any>>;
    myPublicProfileList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersPublicProfileResponse, any>>;
    publicProfileCreate: (id: number, payload: DtoPublicProfileUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, ServicesValidationErrorResponse>>;
    publicStatsList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersPublicProfileStatsResponse, any>>;
    publicDetail: (url: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersPublicProfileResponse, ControllersApiErrorResponse>>;
    publicStatsDetail: (url: string, query?: {
        durationType?: string;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersPublicProfileStatsResponse, any>>;
    publicTradesDetail: (url: string, query?: {
        page?: number;
        itemsPerPage?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesTradesListPagination, any>>;
    referralCodeCreate: (payload: DtoUserReferralCode, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, ServicesValidationErrorResponse>>;
    themeCreate: (payload: DtoUserTheme, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, any>>;
    topTradersDetail: (league: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersTopTradersSuccessResponse, any>>;
    referralsSummaryDetail: (id: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersReferralSummaryResponse, any>>;
}
//# sourceMappingURL=Users.d.ts.map