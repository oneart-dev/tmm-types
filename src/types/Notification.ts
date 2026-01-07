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
   * @description Retrieves a list of the user's latest notifications, which can be marked as seen or interacted with.
   *
   * @tags notification
   * @name LatestList
   * @summary Get Latest Notifications
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
   * @description Records a user's interaction with a notification.
   *
   * @tags notification
   * @name InteractCreate
   * @summary Record Notification Interaction
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
   * @description Marks a notification as seen.
   *
   * @tags notification
   * @name SeenCreate
   * @summary Mark Notification as Seen
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
