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
  ControllersApiSuccessNoData,
  ControllersApiWarningResponse,
  ControllersUnauthorizedResponse,
  DtoClientErrorForm,
  ServicesValidationErrorResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ClientErrors<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Records one uncaught error of the app running in the caller's browser. URL query strings and fragments in `message`, `stack` and `route` are dropped server-side. Bodies over 16 KB are rejected with 413. Limited to 30 reports per hour.
   *
   * @tags client_errors, internal
   * @name ClientErrorsCreate
   * @summary Report a browser error
   * @request POST:/client-errors
   * @secure
   */
  clientErrorsCreate = (payload: DtoClientErrorForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessNoData,
      ServicesValidationErrorResponse | ControllersUnauthorizedResponse | ControllersApiWarningResponse | string
    >({
      path: `/client-errors`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
