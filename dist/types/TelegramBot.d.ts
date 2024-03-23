import { ControllersApiSuccessResponse, ControllersTelegramListResponse, DtoTelegramConnectForm } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class TelegramBot<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    telegramBotList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersTelegramListResponse, any>>;
    telegramBotUpdate: (payload: DtoTelegramConnectForm, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    telegramBotCreate: (id: number, payload: DtoTelegramConnectForm, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    telegramBotDelete: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
}
//# sourceMappingURL=TelegramBot.d.ts.map