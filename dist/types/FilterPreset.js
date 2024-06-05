import { ContentType, HttpClient } from "./http-client";
export class FilterPreset extends HttpClient {
    constructor() {
        super(...arguments);
        this.filterPresetList = (params = {}) => this.request({
            path: `/filter-preset`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.filterPresetUpdate = (payload, params = {}) => this.request({
            path: `/filter-preset`,
            method: "PUT",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.filterPresetCreate = (id, payload, params = {}) => this.request({
            path: `/filter-preset/${id}`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.filterPresetDelete = (id, params = {}) => this.request({
            path: `/filter-preset/${id}`,
            method: "DELETE",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=FilterPreset.js.map