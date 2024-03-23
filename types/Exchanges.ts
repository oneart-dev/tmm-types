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
  ControllersExchangesListResponse,
  ControllersTickersListResponse,
  ControllersUnauthorizedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Exchanges<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description List of all available to connect exchanges
   *
   * @tags exchange
   * @name ExchangesList
   * @summary Exchanges list
   * @request GET:/exchanges
   * @secure
   */
  exchangesList = (params: RequestParams = {}) =>
    this.request<ControllersExchangesListResponse, ControllersUnauthorizedResponse | string>({
      path: `/exchanges`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Combined tickers list for all user api keys
   *
   * @tags exchange
   * @name TickersList
   * @summary Tickers list
   * @request GET:/exchanges/tickers
   * @secure
   */
  tickersList = (params: RequestParams = {}) =>
    this.request<
      ControllersTickersListResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/exchanges/tickers`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
