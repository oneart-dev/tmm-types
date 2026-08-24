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
  ControllersApiSuccessControllersEmailPreferencesData,
  ControllersApiSuccessNoData,
  ControllersApiWarningResponse,
  ControllersUnauthorizedResponse,
  DtoEmailPreferencesForm,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Email<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns the feed registry and the current user's opt-outs for the settings modal.
   *
   * @tags email
   * @name PreferencesList
   * @summary Read email preferences
   * @request GET:/email/preferences
   * @secure
   */
  preferencesList = (params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessControllersEmailPreferencesData,
      ControllersUnauthorizedResponse | ControllersApiErrorResponse
    >({
      path: `/email/preferences`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Full-state write for the settings modal: the submitted list REPLACES every opt-out the user had.
   *
   * @tags email
   * @name PreferencesUpdate
   * @summary Write email preferences
   * @request PUT:/email/preferences
   * @secure
   */
  preferencesUpdate = (payload: DtoEmailPreferencesForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessNoData,
      ControllersApiWarningResponse | ControllersUnauthorizedResponse | ControllersApiErrorResponse
    >({
      path: `/email/preferences`,
      method: "PUT",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the feed registry and the caller's current opt-outs. The signed token from an email footer IS the credential — no login required. Read-only: link prefetchers and antivirus scanners can hit it without changing anything.
   *
   * @tags email
   * @name PreferencesPublicList
   * @summary Read email preferences with a signed token
   * @request GET:/email/preferences/public
   */
  preferencesPublicList = (
    query: {
      /** Signed email-preference token */
      token: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ControllersApiSuccessControllersEmailPreferencesData,
      ControllersApiWarningResponse | ControllersApiErrorResponse
    >({
      path: `/email/preferences/public`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Full-state write: the submitted list REPLACES every opt-out the user had. An empty list re-subscribes to everything; a list containing "all" opts out of every suppressible feed, present and future. Transactional mail (password reset, verification) is never affected.
   *
   * @tags email
   * @name PreferencesPublicUpdate
   * @summary Write email preferences with a signed token
   * @request PUT:/email/preferences/public
   */
  preferencesPublicUpdate = (
    query: {
      /** Signed email-preference token */
      token: string;
    },
    payload: DtoEmailPreferencesForm,
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessNoData, ControllersApiWarningResponse | ControllersApiErrorResponse>({
      path: `/email/preferences/public`,
      method: "PUT",
      query: query,
      body: payload,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description The visible unsubscribe link in the email footer. Verifies the token and redirects (307) to the public preferences page in the user's own locale. It NEVER mutates anything — a mail client that prefetches links must not be able to unsubscribe anybody.
   *
   * @tags email
   * @name UnsubscribeList
   * @summary Open the email preferences page
   * @request GET:/email/unsubscribe
   */
  unsubscribeList = (
    query: {
      /** Signed email-preference token */
      token: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<any, void | ControllersApiWarningResponse | ControllersApiErrorResponse>({
      path: `/email/unsubscribe`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description The endpoint behind `List-Unsubscribe-Post: List-Unsubscribe=One-Click`. Mail clients POST here with no user interaction, so the token and the optional feed are read from the QUERY STRING of the header URL first (the RFC fixes the request body to `List-Unsubscribe=One-Click`), falling back to form fields for hand-built calls. An unknown or missing feed opts the user out of everything. Adds to the existing opt-outs rather than replacing them, and is idempotent.
   *
   * @tags email
   * @name UnsubscribeCreate
   * @summary One-click unsubscribe (RFC 8058)
   * @request POST:/email/unsubscribe
   */
  unsubscribeCreate = (
    query: {
      /** Signed email-preference token */
      token: string;
      /** Feed slug to opt out of; anything unknown means every feed */
      feed?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessNoData, ControllersApiWarningResponse | ControllersApiErrorResponse>({
      path: `/email/unsubscribe`,
      method: "POST",
      query: query,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
}
