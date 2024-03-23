import { ContentType, HttpClient } from "./http-client";
export class ApiUser extends HttpClient {
    constructor() {
        super(...arguments);
        this.apiUserUpdate = (payload, params = {}) => this.request({
            path: `/api-user`,
            method: "PUT",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.apiUserList = (params = {}) => this.request({
            path: `/api-user/`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.apiUserDelete = (id, params = {}) => this.request({
            path: `/api-user/${id}`,
            method: "DELETE",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=ApiUser.js.map