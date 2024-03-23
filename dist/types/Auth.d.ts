import { ControllersApiSuccessResponse, ControllersLoginSuccessResponse, ControllersMeSuccessResponse, ControllersRefreshSuccessResponse, DtoLoginCredentials, DtoNewPasswordCredentials, DtoPasswordResetCredentials, DtoSignUpCredentials } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    emailResendCreate: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    forgotCreate: (payload: DtoPasswordResetCredentials, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    loginCreate: (payload: DtoLoginCredentials, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersLoginSuccessResponse, any>>;
    logoutCreate: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    getAuth: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersMeSuccessResponse, any>>;
    refreshList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersRefreshSuccessResponse, any>>;
    registerCreate: (payload: DtoSignUpCredentials, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersLoginSuccessResponse, any>>;
    resetCreate: (payload: DtoNewPasswordCredentials, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    verifyDetail: (token: number, userId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
}
//# sourceMappingURL=Auth.d.ts.map