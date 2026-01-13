import { ContentType, HttpClient } from "./http-client";
export class RiskManagement extends HttpClient {
    constructor() {
        super(...arguments);
        this.riskManagementUpdate = (payload, params = {}) => this.request({
            path: `/risk-management`,
            method: "PUT",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.riskManagementCreate = (payload, params = {}) => this.request({
            path: `/risk-management`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.riskManagementList = (query, params = {}) => this.request({
            path: `/risk-management/`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.backtestCreate = (payload, query, params = {}) => this.request({
            path: `/risk-management/backtest`,
            method: "POST",
            query: query,
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.getRiskManagement = (query, params = {}) => this.request({
            path: `/risk-management/log`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.riskManagementDelete = (id, params = {}) => this.request({
            path: `/risk-management/${id}`,
            method: "DELETE",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.toggleCreate = (id, params = {}) => this.request({
            path: `/risk-management/${id}/toggle`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=RiskManagement.js.map