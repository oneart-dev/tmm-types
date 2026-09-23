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
  ControllersApiSuccessServicesMarketSubscribeResult,
  ControllersApiWarningResponse,
  ControllersMarketStartData,
  ControllersMarketSubscribeForm,
  ControllersUnauthorizedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Market<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags market, internal
   * @name StreamList
   * @summary Market data stream (prices + 1s candles)
   * @request GET:/market/stream
   * @secure
   */
  streamList = (
    query?: {
      /** Persistent connection ID. The same ID replaces the previous stream instead of counting toward the per-user limit. */
      connection_id?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersMarketStartData, ControllersUnauthorizedResponse | ControllersApiErrorResponse>({
      path: `/market/stream`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Full-state replace. Candle subscriptions are an ordered rolling window: over the limit the OLDEST entries are evicted and reported in `dropped`.
   *
   * @tags market, internal
   * @name SubscribeCreate
   * @summary Replace a stream's subscriptions
   * @request POST:/market/subscribe
   * @secure
   */
  subscribeCreate = (form: ControllersMarketSubscribeForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessServicesMarketSubscribeResult,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse
    >({
      path: `/market/subscribe`,
      method: "POST",
      body: form,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
