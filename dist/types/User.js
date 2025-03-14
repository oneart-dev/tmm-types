import { HttpClient } from "./http-client";
export class User extends HttpClient {
    constructor() {
        super(...arguments);
        this.oauth2Create = (query, params = {}) => this.request({
            path: `/user/oauth2`,
            method: "POST",
            query: query,
            secure: true,
            format: "json",
            ...params,
        });
        this.redeemCreate = (code, params = {}) => this.request({
            path: `/user/${code}/redeem`,
            method: "POST",
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=User.js.map