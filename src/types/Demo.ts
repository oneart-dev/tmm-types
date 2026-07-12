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

import { ControllersApiWarningResponse, ControllersDemoSessionSuccessResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Demo<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Mints a short-lived JWT authenticated as the shared demo account. Read-only; all mutations return 403 demo_read_only. Rate-limited per IP.
   *
   * @tags demo
   * @name SessionCreate
   * @summary Start a read-only demo session
   * @request POST:/demo/session
   */
  sessionCreate = (params: RequestParams = {}) =>
    this.request<ControllersDemoSessionSuccessResponse, ControllersApiWarningResponse | string>({
      path: `/demo/session`,
      method: "POST",
      format: "json",
      ...params,
    });
}
