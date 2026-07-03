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
  ControllersHotCoinsResponse,
  ControllersServerStatsResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Stats<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves public statistics for the server.
   *
   * @tags Stats
   * @name ServerList
   * @summary Get Server Statistics
   * @request GET:/stats/server
   */
  serverList = (params: RequestParams = {}) =>
    this.request<ControllersServerStatsResponse, string | ControllersApiErrorResponse>({
      path: `/stats/server`,
      method: "GET",
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves a list of 'hot' coins based on recent trading activity.
   *
   * @tags Stats
   * @name TopCoinsList
   * @summary Get Hot Coins
   * @request GET:/stats/top-coins
   */
  topCoinsList = (params: RequestParams = {}) =>
    this.request<ControllersHotCoinsResponse, string | ControllersApiErrorResponse>({
      path: `/stats/top-coins`,
      method: "GET",
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
