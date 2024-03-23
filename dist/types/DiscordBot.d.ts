import { ControllersApiSuccessResponse, ControllersDiscordListResponse, DtoTelegramConnectForm } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class DiscordBot<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    discordBotList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersDiscordListResponse, any>>;
    discordBotUpdate: (payload: DtoTelegramConnectForm, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    discordBotCreate: (id: number, payload: DtoTelegramConnectForm, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    discordBotDelete: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
}
//# sourceMappingURL=DiscordBot.d.ts.map