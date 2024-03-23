import { ControllersApiSuccessResponse, ControllersFilesResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Files<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    uploadImageCreate: (model: string, id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersFilesResponse, any>>;
    filesDelete: (id: number, type: string, model: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
}
//# sourceMappingURL=Files.d.ts.map