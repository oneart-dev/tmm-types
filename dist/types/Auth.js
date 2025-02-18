import { ContentType, HttpClient } from "./http-client";
export class Auth extends HttpClient {
    constructor() {
        super(...arguments);
        this.emailResendCreate = (params = {}) => this.request({
            path: `/auth/email/resend`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.forgotCreate = (payload, params = {}) => this.request({
            path: `/auth/forgot`,
            method: "POST",
            body: payload,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.loginCreate = (payload, params = {}) => this.request({
            path: `/auth/login`,
            method: "POST",
            body: payload,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.logoutCreate = (params = {}) => this.request({
            path: `/auth/logout`,
            method: "POST",
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.getAuth = (params = {}) => this.request({
            path: `/auth/me`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        });
        this.refreshList = (params = {}) => this.request({
            path: `/auth/refresh`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.registerCreate = (payload, params = {}) => this.request({
            path: `/auth/register`,
            method: "POST",
            body: payload,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.resetCreate = (payload, params = {}) => this.request({
            path: `/auth/reset`,
            method: "POST",
            body: payload,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.sessionsResetCreate = (payload, params = {}) => this.request({
            path: `/auth/sessions-reset`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.verifyDetail = (token, userId, params = {}) => this.request({
            path: `/auth/verify/${userId}/${token}`,
            method: "GET",
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Auth.js.map