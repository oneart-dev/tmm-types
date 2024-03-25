import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersTelegramListResponse, ControllersUnauthorizedResponse, DtoTelegramConnectForm } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class TelegramBot<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    telegramBotList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersTelegramListResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    telegramBotUpdate: (payload: DtoTelegramConnectForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    telegramBotCreate: (id: number, payload: DtoTelegramConnectForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    telegramBotDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=TelegramBot.d.ts.map