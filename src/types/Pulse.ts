/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  ControllersApiErrorResponse,
  ControllersApiSuccessArrayString,
  ControllersApiSuccessServicesPulseWeek,
  ControllersApiWarningResponse,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Pulse<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns the newest published weekly Market Pulse rollup: the most-traded board (by share of active traders and by share of trades), the hold-duration win-rate ladder, the raw long share and week totals. Aggregate, publish-safe data only — no dollar figures, no absolute trader counts, no exchange breakdown. Only publishable weeks are served: a week whose board came out empty is stored for audit but never returned, so a partially failed rollup leaves the previous good week in place rather than serving a board of zeros. Returns 404 when no week is publishable. No authentication required.
   *
   * @tags market_pulse
   * @name LatestList
   * @summary Get the most recent Market Pulse week
   * @request GET:/pulse/latest
   */
  latestList = (params: RequestParams = {}) =>
    this.request<ControllersApiSuccessServicesPulseWeek, ControllersApiWarningResponse | ControllersApiErrorResponse>({
      path: `/pulse/latest`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Returns the `week_start` dates (YYYY-MM-DD, Monday UTC) of every published Market Pulse week, newest first. Only publishable weeks are listed, so every entry is guaranteed to resolve at `/pulse/{week}`. An empty archive returns an empty array, not 404. No authentication required.
   *
   * @tags market_pulse
   * @name WeeksList
   * @summary List available Market Pulse weeks
   * @request GET:/pulse/weeks
   */
  weeksList = (
    query?: {
      /**
       * Max weeks returned (1–520, default 52)
       * @default 52
       */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessArrayString, ControllersApiErrorResponse>({
      path: `/pulse/weeks`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the published Market Pulse rollup for a single ISO week, addressed by its `week_start` (YYYY-MM-DD, Monday UTC). Aggregate, publish-safe data only. Returns 404 for an unknown week, a malformed date, or a stored week that is not publishable. No authentication required.
   *
   * @tags market_pulse
   * @name PulseDetail
   * @summary Get one Market Pulse week
   * @request GET:/pulse/{week}
   */
  pulseDetail = (week: string, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessServicesPulseWeek, ControllersApiWarningResponse | ControllersApiErrorResponse>({
      path: `/pulse/${week}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
