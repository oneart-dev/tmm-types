import { ContentType, HttpClient } from "./http-client";
export class TelegramBot extends HttpClient {
    constructor() {
        super(...arguments);
        this.telegramBotList = (params = {}) => this.request({
            path: `/telegram-bot`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.telegramBotUpdate = (payload, params = {}) => this.request({
            path: `/telegram-bot`,
            method: "PUT",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.telegramBotCreate = (id, payload, params = {}) => this.request({
            path: `/telegram-bot/${id}`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.telegramBotDelete = (id, params = {}) => this.request({
            path: `/telegram-bot/${id}`,
            method: "DELETE",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=TelegramBot.js.map