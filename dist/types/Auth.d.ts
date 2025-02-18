import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersLoginSuccessResponse, ControllersMeSuccessResponse, ControllersRefreshSuccessResponse, ControllersUnauthorizedResponse, DtoLoginCredentials, DtoNewPasswordCredentials, DtoPasswordResetCredentials, DtoSignUpCredentials, ServicesValidationErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    emailResendCreate: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersUnauthorizedResponse>>;
    forgotCreate: (payload: DtoPasswordResetCredentials, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    loginCreate: (payload: DtoLoginCredentials, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersLoginSuccessResponse, string | ControllersUnauthorizedResponse | ServicesValidationErrorResponse>>;
    logoutCreate: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersUnauthorizedResponse>>;
    getAuth: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersMeSuccessResponse, string | void>>;
    refreshList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersRefreshSuccessResponse, string | ControllersUnauthorizedResponse>>;
    registerCreate: (payload: DtoSignUpCredentials, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersLoginSuccessResponse, string | ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    resetCreate: (payload: DtoNewPasswordCredentials, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    sessionsResetCreate: (payload: DtoPasswordResetCredentials, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    verifyDetail: (token: number, userId: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | void | ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
}
//# sourceMappingURL=Auth.d.ts.map