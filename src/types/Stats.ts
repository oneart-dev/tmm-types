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
   * @description Get server stats
   *
   * @tags Stats
   * @name ServerList
   * @summary Get server stats
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
   * @description List of hot coins
   *
   * @tags Stats
   * @name TopCoinsList
   * @summary List of hot coins
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
