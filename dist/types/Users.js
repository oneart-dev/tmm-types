import { ContentType, HttpClient } from "./http-client";
export class Users extends HttpClient {
    constructor() {
        super(...arguments);
        this.usersCreate = (payload, params = {}) => this.request({
            path: `/users`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.cvizorTogglerCreate = (params = {}) => this.request({
            path: `/users/cvizor-toggler`,
            method: "POST",
            secure: true,
            format: "json",
            ...params,
        });
        this.emailCreate = (payload, params = {}) => this.request({
            path: `/users/email`,
            method: "POST",
            body: payload,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.guideCreate = (payload, params = {}) => this.request({
            path: `/users/guide`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.languageCreate = (payload, params = {}) => this.request({
            path: `/users/language`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.myPublicProfileList = (params = {}) => this.request({
            path: `/users/my-public-profile`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        });
        this.publicProfileCreate = (id, payload, params = {}) => this.request({
            path: `/users/public-profile/${id}`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.publicStatsList = (params = {}) => this.request({
            path: `/users/public/stats`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        });
        this.publicDetail = (url, params = {}) => this.request({
            path: `/users/public/${url}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        });
        this.publicStatsDetail = (url, query, params = {}) => this.request({
            path: `/users/public/${url}/stats`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        });
        this.publicTradesDetail = (url, query, params = {}) => this.request({
            path: `/users/public/${url}/trades`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        });
        this.referralCodeCreate = (payload, params = {}) => this.request({
            path: `/users/referral-code`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.themeCreate = (payload, params = {}) => this.request({
            path: `/users/theme`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.topTradersDetail = (league, params = {}) => this.request({
            path: `/users/top-traders/${league}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        });
        this.referralsSummaryDetail = (id, params = {}) => this.request({
            path: `/users/${id}/referrals/summary`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Users.js.map