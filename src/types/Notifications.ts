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
  ControllersApiSuccessResponse,
  ControllersApiWarningResponse,
  ControllersFeedNotificationCommentImageUploadResponse,
  ControllersFeedNotificationCommentResponse,
  ControllersFeedNotificationFeedResponse,
  ControllersFeedNotificationLikeResponse,
  ControllersUnauthorizedResponse,
  DtoFeedNotificationCommentCreateForm,
  DtoFeedNotificationCommentUpdateForm,
  DtoFeedNotificationVoteForm,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Notifications<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns paginated notifications for current user, language and tier.
   *
   * @tags feed_notifications
   * @name NotificationsList
   * @summary List feed notifications
   * @request GET:/notifications
   * @secure
   */
  notificationsList = (
    query?: {
      /**
       * Page
       * @default 1
       */
      page?: number;
      /**
       * Per page
       * @default 20
       */
      per_page?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersFeedNotificationFeedResponse, ControllersUnauthorizedResponse>({
      path: `/notifications`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags feed_notifications
   * @name CommentsCreate
   * @summary Comment on a notification
   * @request POST:/notifications/{id}/comments
   * @secure
   */
  commentsCreate = (id: number, payload: DtoFeedNotificationCommentCreateForm, params: RequestParams = {}) =>
    this.request<ControllersFeedNotificationCommentResponse, any>({
      path: `/notifications/${id}/comments`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags feed_notifications
   * @name CommentsUpdate
   * @summary Edit own comment
   * @request PUT:/notifications/{id}/comments/{cid}
   */
  commentsUpdate = (
    id: number,
    cid: number,
    payload: DtoFeedNotificationCommentUpdateForm,
    params: RequestParams = {},
  ) =>
    this.request<ControllersFeedNotificationCommentResponse, any>({
      path: `/notifications/${id}/comments/${cid}`,
      method: "PUT",
      body: payload,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags feed_notifications
   * @name CommentsDelete
   * @summary Delete own comment
   * @request DELETE:/notifications/{id}/comments/{cid}
   */
  commentsDelete = (id: string, cid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/notifications/${id}/comments/${cid}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags feed_notifications
   * @name CommentsImageCreate
   * @summary Attach image(s) to a comment (up to 5)
   * @request POST:/notifications/{id}/comments/{cid}/image
   * @secure
   */
  commentsImageCreate = (
    id: number,
    cid: number,
    data: {
      /** Image files (1–5) */
      files: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersFeedNotificationCommentImageUploadResponse, any>({
      path: `/notifications/${id}/comments/${cid}/image`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags feed_notifications
   * @name LikeCreate
   * @summary Toggle like on notification
   * @request POST:/notifications/{id}/like
   * @secure
   */
  likeCreate = (id: number, params: RequestParams = {}) =>
    this.request<ControllersFeedNotificationLikeResponse, any>({
      path: `/notifications/${id}/like`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags feed_notifications
   * @name SeenCreate
   * @summary Mark notification seen
   * @request POST:/notifications/{id}/seen
   * @secure
   */
  seenCreate = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, any>({
      path: `/notifications/${id}/seen`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags feed_notifications
   * @name VoteCreate
   * @summary Vote on notification poll
   * @request POST:/notifications/{id}/vote
   * @secure
   */
  voteCreate = (id: number, payload: DtoFeedNotificationVoteForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersApiWarningResponse>({
      path: `/notifications/${id}/vote`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
