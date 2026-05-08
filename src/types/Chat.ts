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
  ControllersUnauthorizedResponse,
  DtoChatCreateThreadRequest,
  DtoChatCreateThreadResponse,
  DtoChatDeleteResponse,
  DtoChatErrorResponse,
  DtoChatGetThreadResponse,
  DtoChatListThreadsResponse,
  DtoChatProfileRebuildResponse,
  DtoChatQuotaExceededResponse,
  DtoChatSendMessageRequest,
  DtoChatSendMessageResponse,
  DtoChatUsageResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Chat<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns the caller's threads ordered by updated_at DESC. Admins may pass owner_user_id and/or analyzed_user_id query params to filter across users; non-admins are scoped to their own threads regardless of filter.
   *
   * @tags chat
   * @name ThreadsList
   * @summary List chat threads
   * @request GET:/chat/threads
   * @secure
   */
  threadsList = (
    query?: {
      /** Max items (1..200, default 50) */
      limit?: number;
      /** Opaque pagination cursor from a previous response's next_cursor */
      cursor?: string;
      /** Admin-only filter by owner user id */
      owner_user_id?: number;
      /** Admin-only filter by analyzed user id */
      analyzed_user_id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DtoChatListThreadsResponse, DtoChatErrorResponse | ControllersUnauthorizedResponse>({
      path: `/chat/threads`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Opens a new chat thread, builds the trader profile for the analyzed user (defaults to caller), and binds the api_key allowlist to the thread. If analyzed_user_id is set to another user, the caller must be admin or the analyzed user's mentor; otherwise 403.
   *
   * @tags chat
   * @name ThreadsCreate
   * @summary Create a new chat thread
   * @request POST:/chat/threads
   * @secure
   */
  threadsCreate = (request: DtoChatCreateThreadRequest, params: RequestParams = {}) =>
    this.request<
      DtoChatCreateThreadResponse,
      DtoChatErrorResponse | ControllersUnauthorizedResponse | DtoChatQuotaExceededResponse
    >({
      path: `/chat/threads`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the thread header, all chat messages (user/assistant), and per-turn records (question, final answer, answer blocks, totals). Caller must own the thread, be the analyzed user's mentor, or be an admin; otherwise 404.
   *
   * @tags chat
   * @name ThreadsDetail
   * @summary Fetch a chat thread with full history
   * @request GET:/chat/threads/{uid}
   * @secure
   */
  threadsDetail = (uid: string, params: RequestParams = {}) =>
    this.request<DtoChatGetThreadResponse, ControllersUnauthorizedResponse | DtoChatErrorResponse>({
      path: `/chat/threads/${uid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Marks the thread as deleted. Caller must own the thread or be an admin.
   *
   * @tags chat
   * @name ThreadsDelete
   * @summary Soft-delete a chat thread
   * @request DELETE:/chat/threads/{uid}
   * @secure
   */
  threadsDelete = (uid: string, params: RequestParams = {}) =>
    this.request<DtoChatDeleteResponse, ControllersUnauthorizedResponse | DtoChatErrorResponse>({
      path: `/chat/threads/${uid}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Posts the user's question into an existing thread, runs one turn through the orchestrator, and returns the assistant's final answer plus inline answer-blocks (text/widget/trade citations). Pre-flight monthly cap check on the thread owner; returns 429 + code=quota_exceeded if exceeded. Returns 409 + code=thread_busy if another turn on this thread is in flight.
   *
   * @tags chat
   * @name ThreadsMessagesCreate
   * @summary Send a question to a chat thread
   * @request POST:/chat/threads/{uid}/messages
   * @secure
   */
  threadsMessagesCreate = (uid: string, request: DtoChatSendMessageRequest, params: RequestParams = {}) =>
    this.request<
      DtoChatSendMessageResponse,
      DtoChatErrorResponse | ControllersUnauthorizedResponse | DtoChatQuotaExceededResponse
    >({
      path: `/chat/threads/${uid}/messages`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Forces a fresh profile build from the analyzed user's trades within the thread's api_key allowlist. Replaces the cached profile in place. Useful after the analyzed user adds trades or annotations.
   *
   * @tags chat
   * @name ThreadsProfileRebuildCreate
   * @summary Rebuild the trader profile attached to a thread
   * @request POST:/chat/threads/{uid}/profile/rebuild
   * @secure
   */
  threadsProfileRebuildCreate = (uid: string, params: RequestParams = {}) =>
    this.request<DtoChatProfileRebuildResponse, ControllersUnauthorizedResponse | DtoChatErrorResponse>({
      path: `/chat/threads/${uid}/profile/rebuild`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the wire-equivalent payload sent to the LLM provider for each round of the given turn. Admin-only — used for audit and debugging. Response body is the raw rounds JSON array (not wrapped in a status envelope).
   *
   * @tags chat
   * @name ThreadsTurnsRequestsDetail
   * @summary Fetch raw provider request payloads for a turn (admin-only)
   * @request GET:/chat/threads/{uid}/turns/{idx}/requests
   * @secure
   */
  threadsTurnsRequestsDetail = (uid: string, idx: number, params: RequestParams = {}) =>
    this.request<object[], ControllersUnauthorizedResponse | DtoChatErrorResponse>({
      path: `/chat/threads/${uid}/turns/${idx}/requests`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the caller's chat spend (USD micros) for the current calendar month UTC and the tier cap. cap_usd_micro = 0 means unlimited (admin/owner). Mentor users get the pro tier cap.
   *
   * @tags chat
   * @name UsageList
   * @summary Chat monthly usage and cap
   * @request GET:/chat/usage
   * @secure
   */
  usageList = (params: RequestParams = {}) =>
    this.request<DtoChatUsageResponse, ControllersUnauthorizedResponse | DtoChatErrorResponse>({
      path: `/chat/usage`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
