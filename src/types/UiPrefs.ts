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
  ControllersApiSuccessServicesUserPrefsPage,
  ControllersApiSuccessServicesUserPrefsWriteResult,
  ControllersUnauthorizedResponse,
  DtoUserPrefsForm,
  ServicesValidationErrorResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UiPrefs<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns the caller's preference keys with server-assigned timestamps. `since` (unix ms) returns only rows newer than that, for delta reads after an SSE reconnect. Tombstones (`deleted:true`, `v:null`) are included. Replaces GET /ui-data for /app2/; the legacy blob endpoints stay for white-label.
   *
   * @tags ui-prefs
   * @name UiPrefsList
   * @summary Get user preferences (per-key, versioned)
   * @request GET:/ui-prefs
   * @secure
   */
  uiPrefsList = (
    query?: {
      /** unix ms; return rows with ts > since */
      since?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ControllersApiSuccessServicesUserPrefsPage,
      ServicesValidationErrorResponse | ControllersUnauthorizedResponse | string
    >({
      path: `/ui-prefs`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Upserts the given keys with a server-assigned timestamp; `v:null` deletes (tombstone). Keys must be on the server allowlist; unknown, oversize, non-UTF-8 or invalid-JSON values reject the whole request with 400 and nothing is applied. Max 100 items per call; the server allowlist bounds how many distinct keys a user can hold. Every write is pushed to the user's other devices as SSE event `ui-prefs` and mirrored into the legacy /ui-data blob.
   *
   * @tags ui-prefs
   * @name UiPrefsUpdate
   * @summary Write user preferences (per-key, last write wins)
   * @request PUT:/ui-prefs
   * @secure
   */
  uiPrefsUpdate = (payload: DtoUserPrefsForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessServicesUserPrefsWriteResult,
      ServicesValidationErrorResponse | ControllersUnauthorizedResponse | string
    >({
      path: `/ui-prefs`,
      method: "PUT",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
