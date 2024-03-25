import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersDiscordListResponse, ControllersUnauthorizedResponse, DtoTelegramConnectForm } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class DiscordBot<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    discordBotList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersDiscordListResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    discordBotUpdate: (payload: DtoTelegramConnectForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    discordBotCreate: (id: number, payload: DtoTelegramConnectForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    discordBotDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=DiscordBot.d.ts.map