import { ControllersApiErrorResponse, ControllersApiSuccessControllersArtifactManifestResponse, ControllersApiWarningResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Internal<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    artifactsDetail: (version: string, arch: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<File, ControllersApiErrorResponse>>;
    artifactsManifestDetail: (version: string, arch: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessControllersArtifactManifestResponse, ControllersApiErrorResponse | ControllersApiWarningResponse>>;
    artifactsSha256Detail: (version: string, arch: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<string, ControllersApiErrorResponse>>;
}
//# sourceMappingURL=Internal.d.ts.map