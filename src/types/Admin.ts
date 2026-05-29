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
  ControllersApiSuccessControllersFeedNotificationAdminCreateData,
  ControllersApiSuccessNoData,
  ControllersApiSuccessServicesFeedNotificationAnalyticsCounts,
  ControllersApiSuccessServicesFeedNotificationComment,
  ControllersFeedNotificationAdminDetailResponse,
  ControllersFeedNotificationAdminUpdateResponse,
  ControllersFeedNotificationThreadDetailResponse,
  ControllersFeedNotificationThreadInboxResponse,
  ControllersUnauthorizedResponse,
  DtoChatErrorResponse,
  DtoFeedNotificationCommentCreateForm,
  DtoFeedNotificationConversationStatusForm,
  DtoFeedNotificationCreateForm,
  DtoFeedNotificationUpdateForm,
  DtoTicketQuickCreateForm,
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
      /**
       * Sort is fixed: lifecycle priority (open → in_progress → pending_user →
       * resolved) then last_activity_at DESC. The frontend no longer picks a
       * sort mode — the support workflow only ever wants "what needs attention
       * next" at the top, which the lifecycle order encodes directly.
       * @min 1
       */
      page?: number;
      /**
       * @min 1
       * @max 100
       */
      per_page?: number;
      /**
       * Search — fuzzy lookup with smart routing:
       *   pure digits, 1-8 chars   → user_id exact
       *   pure digits, 9+ chars    → notification_id exact
       *   8 chars, base32 alphabet → ticket_uid exact
       *   otherwise (min 3 chars)  → substring on user.name / user.email
       * Frontend can pass whatever the support agent typed; backend
       * disambiguates. Empty disables.
       *
       * Routing priority — digits-only input ALWAYS routes to user_id/
       * notification_id and never to ticket_uid, even when the digits form a
       * valid 8-char base32 string. If the search target is a digit-only
       * ticket UID, use the explicit ticket_uid query param instead. This
       * trade-off favors the common case (admin pasting a numeric user/notif
       * id) over the rare digit-only UID collision.
       *
       * Text search (the substring branch) requires min 3 chars to avoid
       * turning the endpoint into a single-character user-enumeration oracle.
       * Shorter input is treated as empty.
       * @maxLength 255
       */
      search?: string;
      /**
       * Status: conversation lifecycle (open / pending_user / in_progress /
       * resolved) sourced from feed_notification_user. Empty disables the
       * filter — every active conversation surfaces regardless of state.
       */
      status?: "open" | "pending_user" | "in_progress" | "resolved";
      /**
       * TicketUID — exact match on feed_notifications.ticket_uid. Convenience
       * filter for "jump to ticket #ABCD1234"; the # prefix is stripped server-
       * side. Search also routes 8-char base32 input here automatically.
       * @maxLength 12
       */
      ticket_uid?: string;
      type?: "global" | "personal";
      user_id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersFeedNotificationThreadInboxResponse, any>({
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
   * @description Bumps admin_last_read_at for the (notification, scope_user) thread. Single admin-side pointer (not per-admin) at the spec's chosen granularity.
   *
   * @tags admin_notification_threads
   * @name NotificationThreadsSeenCreate
   * @summary Mark a thread as admin-read
   * @request POST:/admin/notification_threads/{notification_id}/{user_id}/seen
   * @secure
   */
  notificationThreadsSeenCreate = (notificationId: number, userId: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessNoData, any>({
      path: `/admin/notification_threads/${notificationId}/${userId}/seen`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * @description Accepts open / pending_user / in_progress / resolved. No sticky guards — admin can reopen a resolved thread. Auto-transitions on comment activity flow through the comment service, not this endpoint.
   *
   * @tags admin_notification_threads
   * @name NotificationThreadsStatusPartialUpdate
   * @summary Manual override for a thread's conversation status
   * @request PATCH:/admin/notification_threads/{notification_id}/{user_id}/status
   * @secure
   */
  notificationThreadsStatusPartialUpdate = (
    notificationId: number,
    userId: number,
    payload: DtoFeedNotificationConversationStatusForm,
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessNoData, any>({
      path: `/admin/notification_threads/${notificationId}/${userId}/status`,
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
   * @name NotificationsList
   * @summary List notifications (admin)
   * @request GET:/admin/notifications
   */
  notificationsList = (
    query?: {
      /** global | personal */
      type?: string;
      /** notification | ticket */
      kind?: string;
      /** draft | published | open | pending_user | in_progress | resolved */
      status?: string;
      /** Exact match on event_kind tag (e.g. subscription_expiring) */
      event_kind?: string;
      /** created_by_user_id exact */
      author?: number;
      /** Page */
      page?: number;
      /** Page size (max 100) */
      per_page?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessArrayServicesFeedNotificationAdminListItem, any>({
      path: `/admin/notifications`,
      method: "GET",
      query: query,
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
    this.request<ControllersFeedNotificationAdminUpdateResponse, any>({
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
