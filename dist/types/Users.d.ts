import { ControllersApiSuccessResponse, ControllersLoginSuccessResponse, ControllersPublicProfileResponse, ControllersPublicProfileStatsResponse, ControllersReferralSummaryResponse, ControllersTopTradersSuccessResponse, DtoPasswordResetCredentials, DtoPublicProfileUpdateForm, DtoUserLanguage, DtoUserReferralCode, DtoUserTheme, DtoUserUpdateForm, ServicesGuideProgress, ServicesTradesListPagination } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Users<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    usersCreate: (payload: DtoUserUpdateForm, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersLoginSuccessResponse, any>>;
    cvizorTogglerCreate: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    emailCreate: (payload: DtoPasswordResetCredentials, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    guideCreate: (payload: ServicesGuideProgress, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    languageCreate: (payload: DtoUserLanguage, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    myPublicProfileList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersPublicProfileResponse, any>>;
    publicProfileCreate: (id: number, payload: DtoPublicProfileUpdateForm, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    publicStatsList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersPublicProfileStatsResponse, any>>;
    publicDetail: (url: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersPublicProfileResponse, any>>;
    publicStatsDetail: (url: string, query?: {
        durationType?: string;
    }, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersPublicProfileStatsResponse, any>>;
    publicTradesDetail: (url: string, query?: {
        page?: number;
        sortBy?: string;
        sortDesc?: boolean;
        itemsPerPage?: number;
    }, params?: RequestParams) => Promise<import("axios").AxiosResponse<ServicesTradesListPagination, any>>;
    referralCodeCreate: (payload: DtoUserReferralCode, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    themeCreate: (payload: DtoUserTheme, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    topTradersDetail: (league: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersTopTradersSuccessResponse, any>>;
    referralsSummaryDetail: (id: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersReferralSummaryResponse, any>>;
}
//# sourceMappingURL=Users.d.ts.map