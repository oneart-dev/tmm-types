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

import { ControllersApiErrorResponse, ControllersUnauthorizedResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Candles<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get Candles list. Tf or interval is required.
   *
   * @tags candles
   * @name ListList
   * @summary Get Candles list
   * @request GET:/candles/list
   * @secure
   */
  listList = (
    query: {
      /** Exchange ID */
      exchange_id: number;
      /** Symbol */
      symbol: number;
      /** Timeframe */
      tf?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21;
      /**
       * Interval
       * @example ""1s","3s","5s","15s","30s","1m","3m","5m","15m","30m","1h","2h","4h","6h","12h","1d","3d","1w""
       */
      interval?: string;
      /** From unix timestamp */
      from?: number;
      /** To unix timestamp */
      to?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<object[][], ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/candles/list`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
