import { ControllersApiSuccessResponse, ControllersApiUsersListResponse, DtoApiUserUpdateForm } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class ApiUser<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    apiUserUpdate: (payload: DtoApiUserUpdateForm, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    apiUserList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiUsersListResponse, any>>;
    apiUserDelete: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
}
//# sourceMappingURL=ApiUser.d.ts.map