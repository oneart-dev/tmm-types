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
   * @description Get Candles list
   *
   * @tags candles
   * @name ListList
   * @summary Get Candles list
   * @request GET:/candles/list
   * @secure
   */
  listList = (params: RequestParams = {}) =>
    this.request<object[][], ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/candles/list`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
