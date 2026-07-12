import { HttpClient } from "./http-client";
export class Demo extends HttpClient {
    constructor() {
        super(...arguments);
        this.sessionCreate = (params = {}) => this.request({
            path: `/demo/session`,
            method: "POST",
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Demo.js.map