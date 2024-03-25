import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersApiUsersListResponse, ControllersUnauthorizedResponse, DtoApiUserUpdateForm, ServicesValidationErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class ApiUser<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    apiUserUpdate: (payload: DtoApiUserUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse | ServicesValidationErrorResponse>>;
    apiUserList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiUsersListResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    apiUserDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=ApiUser.d.ts.map