import { ControllersApiErrorResponse, ControllersTranscribeResponse, ControllersTranscribeUsageResponse, ControllersUnauthorizedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Transcribe<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    transcribeCreate: (data: {
        audio: File;
        owner_type?: string;
        owner_id?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersTranscribeResponse, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    usageList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersTranscribeUsageResponse, ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Transcribe.d.ts.map