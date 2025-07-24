import { ContentType, HttpClient } from "./http-client";
export class ApiKey extends HttpClient {
    constructor() {
        super(...arguments);
        this.apiKeyUpdate = (payload, params = {}) => this.request({
            path: `/api-key`,
            method: "PUT",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.apiKeyList = (query, params = {}) => this.request({
            path: `/api-key/`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.listDetail = (userId, params = {}) => this.request({
            path: `/api-key/list/${userId}`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.apiKeyCreate = (id, payload, params = {}) => this.request({
            path: `/api-key/${id}`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.apiKeyDelete = (id, params = {}) => this.request({
            path: `/api-key/${id}`,
            method: "DELETE",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.balanceUpdateCreate = (id, params = {}) => this.request({
            path: `/api-key/${id}/balance-update`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.freezeCreate = (id, params = {}) => this.request({
            path: `/api-key/${id}/freeze`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.fundingUpdateCreate = (id, params = {}) => this.request({
            path: `/api-key/${id}/funding-update`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.migrateToNewIdCreate = (id, params = {}) => this.request({
            path: `/api-key/${id}/migrate-to-new-id`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.nameCreate = (id, payload, params = {}) => this.request({
            path: `/api-key/${id}/name`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.ordersArchiveCreate = (id, params = {}) => this.request({
            path: `/api-key/${id}/orders-archive`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.repairCreate = (id, params = {}) => this.request({
            path: `/api-key/${id}/repair`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.toggleCreate = (id, params = {}) => this.request({
            path: `/api-key/${id}/toggle`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.toggleExtendedCreate = (id, params = {}) => this.request({
            path: `/api-key/${id}/toggle-extended`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=ApiKey.js.map