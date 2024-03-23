import { ContentType, HttpClient } from "./http-client";
export class Trades extends HttpClient {
    constructor() {
        super(...arguments);
        this.tradesList = (query, params = {}) => this.request({
            path: `/trades/`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.archiveAllCreate = (params = {}) => this.request({
            path: `/trades/archive-all`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.categoriesList = (params = {}) => this.request({
            path: `/trades/categories`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.categoriesCreate = (payload, params = {}) => this.request({
            path: `/trades/categories`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.categoriesCreate2 = (id, payload, params = {}) => this.request({
            path: `/trades/categories/${id}`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.categoriesDelete = (id, params = {}) => this.request({
            path: `/trades/categories/${id}`,
            method: "DELETE",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.dayOrdersList = (apiKeyId, date, symbol, params = {}) => this.request({
            path: `/trades/day/orders`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.exportDetail = (format, query, params = {}) => this.request({
            path: `/trades/export/${format}`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            ...params,
        });
        this.globalSaveChartCreate = (id, ticker, payload, params = {}) => this.request({
            path: `/trades/global/${ticker}/save-chart`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.mergeCreate = (payload, params = {}) => this.request({
            path: `/trades/merge`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.publicGroupDetail = (code, params = {}) => this.request({
            path: `/trades/public-group/${code}`,
            method: "GET",
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.publicDetail = (code, params = {}) => this.request({
            path: `/trades/public/${code}`,
            method: "GET",
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.publicLoadCandlesDataCreate = (code, payload, params = {}) => this.request({
            path: `/trades/public/${code}/loadCandlesData`,
            method: "POST",
            body: payload,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.publicPreviewDetail = (code, params = {}) => this.request({
            path: `/trades/public/${code}/preview`,
            method: "GET",
            type: ContentType.Json,
            ...params,
        });
        this.shortLinkGroupCreate = (payload, params = {}) => this.request({
            path: `/trades/short-link-group`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.tagsList = (params = {}) => this.request({
            path: `/trades/tags`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.tagsCreate = (payload, params = {}) => this.request({
            path: `/trades/tags`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.tagsSortCreate = (payload, params = {}) => this.request({
            path: `/trades/tags/sort`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.tagsCreate2 = (id, payload, params = {}) => this.request({
            path: `/trades/tags/${id}`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.tagsDelete = (id, params = {}) => this.request({
            path: `/trades/tags/${id}`,
            method: "DELETE",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.updateCategoryCreate = (payload, params = {}) => this.request({
            path: `/trades/update-category`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.chartDataCreate = (id, payload, params = {}) => this.request({
            path: `/trades/${id}/chart-data`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.closeCreate = (id, params = {}) => this.request({
            path: `/trades/${id}/close`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.loadCandlesDataCreate = (id, payload, params = {}) => this.request({
            path: `/trades/${id}/loadCandlesData`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.ordersDetail = (id, params = {}) => this.request({
            path: `/trades/${id}/orders`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.saveChartCreate = (id, payload, params = {}) => this.request({
            path: `/trades/${id}/save-chart`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.shortLinkCreate = (id, params = {}) => this.request({
            path: `/trades/${id}/short-link`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.tagsCreate3 = (id, payload, params = {}) => this.request({
            path: `/trades/${id}/tags`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.updateCreate = (id, payload, params = {}) => this.request({
            path: `/trades/${id}/update`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Trades.js.map