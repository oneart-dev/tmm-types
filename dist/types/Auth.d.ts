import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersLoginSuccessResponse, ControllersMeSuccessResponse, ControllersRefreshSuccessResponse, ControllersUnauthorizedResponse, DtoLoginCredentials, DtoNewPasswordCredentials, DtoPasswordResetCredentials, DtoSignUpCredentials, ServicesValidationErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    emailResendCreate: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, ControllersUnauthorizedResponse>>;
    forgotCreate: (payload: DtoPasswordResetCredentials, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    loginCreate: (payload: DtoLoginCredentials, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersLoginSuccessResponse, string | ControllersUnauthorizedResponse | ServicesValidationErrorResponse>>;
    logoutCreate: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersUnauthorizedResponse>>;
    getAuth: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersMeSuccessResponse, ControllersUnauthorizedResponse>>;
    refreshList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersRefreshSuccessResponse, string | ControllersUnauthorizedResponse>>;
    registerCreate: (payload: DtoSignUpCredentials, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersLoginSuccessResponse, ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    resetCreate: (payload: DtoNewPasswordCredentials, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
    sessionsResetCreate: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, ControllersApiErrorResponse>>;
    verifyDetail: (userId: number, token: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, void | ControllersApiErrorResponse | ServicesValidationErrorResponse>>;
}
//# sourceMappingURL=Auth.d.ts.map