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
  ControllersApiSuccessNoData,
  ControllersContactBadRequestResponse,
  DtoContactForm,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Contact<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Sends a message to the site's contact inbox. Unauthenticated, heavily rate-limited (3/min per IP), and gated by Cloudflare Turnstile (captcha_token) when Turnstile.SecretKey is configured — an unverifiable or rejected token fails the request closed. Never emails the submitter back.
   *
   * @tags contact
   * @name ContactCreate
   * @summary Submit the public contact form
   * @request POST:/contact
   */
  contactCreate = (payload: DtoContactForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessNoData,
      ControllersContactBadRequestResponse | string | ControllersApiErrorResponse
    >({
      path: `/contact`,
      method: "POST",
      body: payload,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
