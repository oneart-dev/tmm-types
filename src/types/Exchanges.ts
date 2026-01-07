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
   * @description Retrieves a list of all exchanges available for connection.
   *
   * @tags exchange
   * @name ExchangesList
   * @summary List Available Exchanges
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
   * @description Retrieves a combined list of tickers from all of the user's connected API keys.
   *
   * @tags exchange
   * @name TickersList
   * @summary Get Tickers List
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
