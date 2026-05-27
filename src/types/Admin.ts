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
  ChatExportPayload,
  ControllersApiSuccessArrayServicesFeedNotificationAdminListItem,
  ControllersApiSuccessArrayServicesFeedNotificationRawVote,
  ControllersApiSuccessArrayServicesFeedNotificationThreadSummary,
  ControllersApiSuccessControllersFeedNotificationAdminCreateData,
  ControllersApiSuccessControllersFeedNotificationAdminUpdateData,
  ControllersApiSuccessNoData,
  ControllersApiSuccessServicesFeedNotificationAnalyticsCounts,
  ControllersApiSuccessServicesFeedNotificationComment,
  ControllersFeedNotificationAdminDetailResponse,
  ControllersFeedNotificationThreadDetailResponse,
  ControllersUnauthorizedResponse,
  DtoChatErrorResponse,
  DtoFeedNotificationCommentCreateForm,
  DtoFeedNotificationCreateForm,
  DtoFeedNotificationUpdateForm,
  DtoTicketQuickCreateForm,
  DtoTicketStatusUpdateForm,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Admin<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns every RoundRequest persisted for the thread, flattened across turns and ordered by (turn_index, round_index). Intended for forensic debugging — e.g. inspecting what was sent before a turn failed with context deadline exceeded.
   *
   * @tags chat
   * @name ChatThreadsExportDetail
   * @summary Export full LLM-request payloads for a chat thread (admin only)
   * @request GET:/admin/chat/threads/{uid}/export
   * @secure
   */
  chatThreadsExportDetail = (uid: string, params: RequestParams = {}) =>
    this.request<ChatExportPayload, ControllersUnauthorizedResponse | DtoChatErrorResponse>({
      path: `/admin/chat/threads/${uid}/export`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags admin_notification_threads
   * @name NotificationThreadsList
   * @summary Notification thread inbox
   * @request GET:/admin/notification_threads
   */
  notificationThreadsList = (
    query?: {
      /**
       * Kind: notification (default), ticket, or empty for both. Tickets and
       * notifications share the same inbox table but the support workflow
       * usually wants them split.
       */
      kind?: "notification" | "ticket";
      notification_id?: number;
      /** @min 1 */
      page?: number;
      /**
       * @min 1
       * @max 100
       */
      per_page?: number;
      sort?: "last_activity_desc" | "unanswered_first" | "oldest_unanswered_first";
      /**
       * Status: for notifications it's an inbox-state alias (open=unanswered,
       * answered, all). For tickets it's the ticket-lifecycle value
       * (open / pending / resolved). The repo branches on Kind to pick the
       * right interpretation; "all" / "" disables either filter.
       */
      status?: "open" | "answered" | "all" | "pending" | "resolved";
      type?: "global" | "personal";
      user_id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessArrayServicesFeedNotificationThreadSummary, any>({
      path: `/admin/notification_threads`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin_notification_threads
   * @name NotificationThreadsDetail
   * @summary Single thread
   * @request GET:/admin/notification_threads/{notification_id}/{user_id}
   */
  notificationThreadsDetail = (notificationId: number, userId: number, params: RequestParams = {}) =>
    this.request<ControllersFeedNotificationThreadDetailResponse, any>({
      path: `/admin/notification_threads/${notificationId}/${userId}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags admin_notification_threads
   * @name NotificationThreadsReplyCreate
   * @summary Admin reply alias
   * @request POST:/admin/notification_threads/{notification_id}/{user_id}/reply
   */
  notificationThreadsReplyCreate = (
    notificationId: number,
    userId: number,
    payload: DtoFeedNotificationCommentCreateForm,
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessServicesFeedNotificationComment, any>({
      path: `/admin/notification_threads/${notificationId}/${userId}/reply`,
      method: "POST",
      body: payload,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin_feed_notifications
   * @name NotificationsList
   * @summary List notifications (admin)
   * @request GET:/admin/notifications
   */
  notificationsList = (params: RequestParams = {}) =>
    this.request<ControllersApiSuccessArrayServicesFeedNotificationAdminListItem, any>({
      path: `/admin/notifications`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags admin_feed_notifications
   * @name NotificationsCreate
   * @summary Create draft notification
   * @request POST:/admin/notifications
   * @secure
   */
  notificationsCreate = (payload: DtoFeedNotificationCreateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessControllersFeedNotificationAdminCreateData, any>({
      path: `/admin/notifications`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin_feed_notifications
   * @name NotificationsDetail
   * @summary Notification detail (admin)
   * @request GET:/admin/notifications/{id}
   */
  notificationsDetail = (id: number, params: RequestParams = {}) =>
    this.request<ControllersFeedNotificationAdminDetailResponse, any>({
      path: `/admin/notifications/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags admin_feed_notifications
   * @name NotificationsUpdate
   * @summary Edit notification
   * @request PUT:/admin/notifications/{id}
   */
  notificationsUpdate = (id: number, payload: DtoFeedNotificationUpdateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessControllersFeedNotificationAdminUpdateData, any>({
      path: `/admin/notifications/${id}`,
      method: "PUT",
      body: payload,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin_feed_notifications
   * @name NotificationsDelete
   * @summary Delete notification
   * @request DELETE:/admin/notifications/{id}
   */
  notificationsDelete = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessNoData, any>({
      path: `/admin/notifications/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags admin_feed_notifications
   * @name NotificationsAnalyticsDetail
   * @summary Notification analytics (admin)
   * @request GET:/admin/notifications/{id}/analytics
   */
  notificationsAnalyticsDetail = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessServicesFeedNotificationAnalyticsCounts, any>({
      path: `/admin/notifications/${id}/analytics`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags admin_feed_notifications
   * @name NotificationsPublishCreate
   * @summary Publish notification
   * @request POST:/admin/notifications/{id}/publish
   */
  notificationsPublishCreate = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessNoData, any>({
      path: `/admin/notifications/${id}/publish`,
      method: "POST",
      ...params,
    });
  /**
   * @description Accepts open / pending / resolved. Auto-transitions on comment activity also flow through the same service method but are driven by the comment service, not this endpoint.
   *
   * @tags admin_feed_notifications
   * @name NotificationsStatusPartialUpdate
   * @summary Set ticket status (admin override)
   * @request PATCH:/admin/notifications/{id}/status
   * @secure
   */
  notificationsStatusPartialUpdate = (id: number, payload: DtoTicketStatusUpdateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessNoData, any>({
      path: `/admin/notifications/${id}/status`,
      method: "PATCH",
      body: payload,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin_feed_notifications
   * @name NotificationsVotesDetail
   * @summary Raw vote list (admin)
   * @request GET:/admin/notifications/{id}/votes
   */
  notificationsVotesDetail = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessArrayServicesFeedNotificationRawVote, any>({
      path: `/admin/notifications/${id}/votes`,
      method: "GET",
      ...params,
    });
  /**
   * @description Slim payload — title/text/optional images. Backend builds the full ticket-shaped notification (kind=ticket, type=personal, lang=und) and assigns a ticket_uid. Used by the users-list "create ticket" shortcut.
   *
   * @tags admin_feed_notifications
   * @name UsersTicketsCreate
   * @summary Spin up a support ticket on a specific user
   * @request POST:/admin/users/{id}/tickets
   * @secure
   */
  usersTicketsCreate = (id: number, payload: DtoTicketQuickCreateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessControllersFeedNotificationAdminCreateData, any>({
      path: `/admin/users/${id}/tickets`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
