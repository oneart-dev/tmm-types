import { ContentType, HttpClient } from "./http-client";
export class Email extends HttpClient {
    constructor() {
        super(...arguments);
        this.preferencesList = (params = {}) => this.request({
            path: `/email/preferences`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        });
        this.preferencesUpdate = (payload, params = {}) => this.request({
            path: `/email/preferences`,
            method: "PUT",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.preferencesPublicList = (query, params = {}) => this.request({
            path: `/email/preferences/public`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        this.preferencesPublicUpdate = (query, payload, params = {}) => this.request({
            path: `/email/preferences/public`,
            method: "PUT",
            query: query,
            body: payload,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.unsubscribeList = (query, params = {}) => this.request({
            path: `/email/unsubscribe`,
            method: "GET",
            query: query,
            ...params,
        });
        this.unsubscribeCreate = (query, params = {}) => this.request({
            path: `/email/unsubscribe`,
            method: "POST",
            query: query,
            type: ContentType.UrlEncoded,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Email.js.map