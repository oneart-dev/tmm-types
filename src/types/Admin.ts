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

import { ChatExportPayload, ControllersUnauthorizedResponse, DtoChatErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

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
}
