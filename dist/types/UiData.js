import { ContentType, HttpClient } from "./http-client";
export class UiData extends HttpClient {
    constructor() {
        super(...arguments);
        this.uiDataList = (params = {}) => this.request({
            path: `/ui-data`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.uiDataUpdate = (payload, params = {}) => this.request({
            path: `/ui-data`,
            method: "PUT",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=UiData.js.map