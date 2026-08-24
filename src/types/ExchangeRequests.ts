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
  ControllersApiSuccessServicesExchangeRequest,
  ControllersUnauthorizedResponse,
  DtoExchangeRequestCreateForm,
  ServicesValidationErrorResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ExchangeRequests<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Records a free-text exchange/broker name the user could not find in the connect wizard. Rate limited to 3 submissions per user per rolling 24 hours; over the budget the endpoint answers with a standard 400 validation payload on the `text` field.
   *
   * @tags exchange-requests
   * @name ExchangeRequestsCreate
   * @summary Request an exchange
   * @request POST:/exchange-requests
   * @secure
   */
  exchangeRequestsCreate = (payload: DtoExchangeRequestCreateForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessServicesExchangeRequest,
      ServicesValidationErrorResponse | ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/exchange-requests`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
