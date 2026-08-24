import { ContentType, HttpClient } from "./http-client";
export class Oauth extends HttpClient {
    constructor() {
        super(...arguments);
        this.authorizeCreate = (body, params = {}) => this.request({
            path: `/oauth/authorize`,
            method: "POST",
            body: body,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.authorizeContextList = (query, params = {}) => this.request({
            path: `/oauth/authorize-context`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.grantsList = (params = {}) => this.request({
            path: `/oauth/grants`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.grantsDelete = (id, params = {}) => this.request({
            path: `/oauth/grants/${id}`,
            method: "DELETE",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.registerCreate = (body, params = {}) => this.request({
            path: `/oauth/register`,
            method: "POST",
            body: body,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.revokeCreate = (data, params = {}) => this.request({
            path: `/oauth/revoke`,
            method: "POST",
            body: data,
            type: ContentType.UrlEncoded,
            format: "json",
            ...params,
        });
        this.tokenCreate = (data, params = {}) => this.request({
            path: `/oauth/token`,
            method: "POST",
            body: data,
            type: ContentType.UrlEncoded,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Oauth.js.map