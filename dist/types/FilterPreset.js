import { ContentType, HttpClient } from "./http-client";
export class FilterPreset extends HttpClient {
    constructor() {
        super(...arguments);
        this.filterPresetUpdate = (id, params = {}) => this.request({
            path: `/filter-preset`,
            method: "PUT",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=FilterPreset.js.map