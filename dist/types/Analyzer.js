import { ContentType, HttpClient } from "./http-client";
export class Analyzer extends HttpClient {
    constructor() {
        super(...arguments);
        this.analyzerList = (query, params = {}) => this.request({
            path: `/analyzer/`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.notesList = (query, params = {}) => this.request({
            path: `/analyzer/notes`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.notesCreate = (payload, params = {}) => this.request({
            path: `/analyzer/notes`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.weekListList = (query, params = {}) => this.request({
            path: `/analyzer/week-list`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.chartDataCreate = (ticker, params = {}) => this.request({
            path: `/analyzer/${ticker}/chart-data`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.loadCandlesDataCreate = (ticker, payload, params = {}) => this.request({
            path: `/analyzer/${ticker}/loadCandlesData`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Analyzer.js.map