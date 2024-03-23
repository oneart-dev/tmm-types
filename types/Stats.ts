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
  ControllersLongShortRatioResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Stats<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Long/Short ratio
   *
   * @tags Stats
   * @name LongShortRatioList
   * @summary Long/Short ratio
   * @request GET:/stats/long-short-ratio
   */
  longShortRatioList = (params: RequestParams = {}) =>
    this.request<ControllersLongShortRatioResponse, string | ControllersApiErrorResponse>({
      path: `/stats/long-short-ratio`,
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
