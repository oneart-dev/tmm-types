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
  ControllersApiSuccessArrayServicesBaseConnection,
  ControllersUnauthorizedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Connections<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a list of all Connection bot connections for the user.
   *
   * @tags connections
   * @name ConnectionsList
   * @summary List Connection
   * @request GET:/connections
   * @secure
   */
  connectionsList = (params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessArrayServicesBaseConnection,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/connections`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
