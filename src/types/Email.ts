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
  ControllersApiWarningResponse,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Email<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description One-click unsubscribe for the post-signup activation email sequence. The token is signed and carries the user id, so no authentication is required and a tampered id fails verification. The call is idempotent — clicking the link a second time succeeds the same way. Browsers are redirected to the app with `?unsubscribed=1`; a request sent with `Accept: application/json` gets a JSON response instead.
   *
   * @tags email
   * @name UnsubscribeList
   * @summary Opt out of activation emails
   * @request GET:/email/unsubscribe
   */
  unsubscribeList = (
    query: {
      /** Signed unsubscribe token from the email footer */
      token: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessNoData, void | ControllersApiWarningResponse | ControllersApiErrorResponse>({
      path: `/email/unsubscribe`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
