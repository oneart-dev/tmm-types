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
  ControllersLatestNotificationsResponse,
  ControllersUnauthorizedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Notification<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description List of latest notifications for the user. Notification can be seen and interact.
   *
   * @tags notification
   * @name LatestList
   * @summary List of latest notifications for the user
   * @request GET:/notification/latest
   * @secure
   */
  latestList = (params: RequestParams = {}) =>
    this.request<
      ControllersLatestNotificationsResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/notification/latest`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Save user interaction with notification
   *
   * @tags notification
   * @name InteractCreate
   * @summary Save user interaction with notification
   * @request POST:/notification/{id}/interact
   * @secure
   */
  interactCreate = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/notification/${id}/interact`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Make notification as seen
   *
   * @tags notification
   * @name SeenCreate
   * @summary Make notification as seen
   * @request POST:/notification/{id}/seen
   * @secure
   */
  seenCreate = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/notification/${id}/seen`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
