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
  ServicesPaginationResponseArrayServicesNotificationTemplate,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class NotificationTemplate<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paginated list of notification templates.
   *
   * @tags notification-template
   * @name NotificationTemplateList
   * @summary List Notification Templates
   * @request GET:/notification-template
   * @secure
   */
  notificationTemplateList = (
    query?: {
      /** Page */
      page?: number;
      /** Sort by field */
      sortBy?: string;
      /** Descending order */
      sortDesc?: boolean;
      /** Items per page */
      itemsPerPage?: number;
      name?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ServicesPaginationResponseArrayServicesNotificationTemplate,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/notification-template`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new notification template that can be used for any external notification service (e.g., Telegram, Discord).
   *
   * @tags notification-template
   * @name NotificationTemplateUpdate
   * @summary Create Notification Template
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
   * @description Updates the name and description of a notification template.
   *
   * @tags notification-template
   * @name NotificationTemplateCreate
   * @summary Update Notification Template
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
   * @description Deletes a notification template.
   *
   * @tags notification-template
   * @name NotificationTemplateDelete
   * @summary Delete Notification Template
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
