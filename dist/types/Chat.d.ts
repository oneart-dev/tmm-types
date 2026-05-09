import { ControllersUnauthorizedResponse, DtoChatCreateThreadRequest, DtoChatCreateThreadResponse, DtoChatDeleteResponse, DtoChatErrorResponse, DtoChatGetThreadResponse, DtoChatListThreadsResponse, DtoChatNotAvailableResponse, DtoChatProfileRebuildResponse, DtoChatQuotaExhaustedResponse, DtoChatSendMessageRequest, DtoChatSendMessageResponse, DtoChatUsageResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Chat<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    threadsList: (query?: {
        limit?: number;
        cursor?: string;
        owner_user_id?: number;
        analyzed_user_id?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<DtoChatListThreadsResponse, ControllersUnauthorizedResponse | DtoChatErrorResponse>>;
    threadsCreate: (request: DtoChatCreateThreadRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<DtoChatCreateThreadResponse, ControllersUnauthorizedResponse | DtoChatErrorResponse | DtoChatQuotaExhaustedResponse>>;
    threadsDetail: (uid: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<DtoChatGetThreadResponse, ControllersUnauthorizedResponse | DtoChatErrorResponse>>;
    threadsDelete: (uid: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<DtoChatDeleteResponse, ControllersUnauthorizedResponse | DtoChatErrorResponse>>;
    threadsMessagesCreate: (uid: string, request: DtoChatSendMessageRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<DtoChatSendMessageResponse, ControllersUnauthorizedResponse | DtoChatErrorResponse | DtoChatQuotaExhaustedResponse>>;
    threadsProfileRebuildCreate: (uid: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<DtoChatProfileRebuildResponse, ControllersUnauthorizedResponse | DtoChatErrorResponse>>;
    threadsTurnsRequestsDetail: (uid: string, idx: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<object[], ControllersUnauthorizedResponse | DtoChatErrorResponse>>;
    usageList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<DtoChatUsageResponse, ControllersUnauthorizedResponse | DtoChatErrorResponse | DtoChatNotAvailableResponse>>;
}
//# sourceMappingURL=Chat.d.ts.map