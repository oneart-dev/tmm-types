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
  ControllersApiSuccessResponse,
  ControllersApiWarningResponse,
  ControllersUnauthorizedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Transaction<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Cancel transaction. Transaction must be in pending state. Any other state will return error.
   *
   * @tags transactions
   * @name CancelCreate
   * @summary Cancel transaction
   * @request POST:/transaction/{id}/cancel
   * @secure
   */
  cancelCreate = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/transaction/${id}/cancel`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
