import { ContentType, HttpClient } from "./http-client";
export class UiPrefs extends HttpClient {
    constructor() {
        super(...arguments);
        this.uiPrefsList = (query, params = {}) => this.request({
            path: `/ui-prefs`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        });
        this.uiPrefsUpdate = (payload, params = {}) => this.request({
            path: `/ui-prefs`,
            method: "PUT",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=UiPrefs.js.map