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
  ControllersApiSuccessServicesNotificationTemplate,
  ControllersApiWarningResponse,
  ControllersUnauthorizedResponse,
  DtoNotificationTemplateCreateForm,
  DtoNotificationTemplateUpdateForm,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class NotificationTemplate<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Create notification template universal for any external notification (eg Telegram, Discord, etc.)
   *
   * @tags notification-template
   * @name NotificationTemplateUpdate
   * @summary create new notification template
   * @request PUT:/notification-template
   * @secure
   */
  notificationTemplateUpdate = (payload: DtoNotificationTemplateCreateForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessServicesNotificationTemplate,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/notification-template`,
      method: "PUT",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update notification template name, description
   *
   * @tags notification-template
   * @name NotificationTemplateCreate
   * @summary update notification template
   * @request POST:/notification-template/{id}
   * @secure
   */
  notificationTemplateCreate = (id: number, payload: DtoNotificationTemplateUpdateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/notification-template/${id}`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Deleting notification template
   *
   * @tags notification-template
   * @name NotificationTemplateDelete
   * @summary delete notification template
   * @request DELETE:/notification-template/{id}
   * @secure
   */
  notificationTemplateDelete = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/notification-template/${id}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
