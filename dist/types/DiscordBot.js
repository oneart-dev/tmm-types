import { ContentType, HttpClient } from "./http-client";
export class DiscordBot extends HttpClient {
    constructor() {
        super(...arguments);
        this.discordBotList = (params = {}) => this.request({
            path: `/discord-bot`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.discordBotUpdate = (payload, params = {}) => this.request({
            path: `/discord-bot`,
            method: "PUT",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.discordBotCreate = (id, payload, params = {}) => this.request({
            path: `/discord-bot/${id}`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.discordBotDelete = (id, params = {}) => this.request({
            path: `/discord-bot/${id}`,
            method: "DELETE",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=DiscordBot.js.map