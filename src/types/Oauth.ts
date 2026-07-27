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
  ControllersApiSuccessArrayControllersOauthGrantView,
  ControllersApiSuccessControllersOauthAuthorizeContext,
  ControllersApiSuccessControllersOauthAuthorizeResult,
  ControllersApiSuccessNoData,
  ControllersApiWarningResponse,
  ControllersOauthAuthorizeRequest,
  ControllersOauthClientRegistrationResponse,
  ControllersOauthProtocolError,
  ControllersOauthTokenResponse,
  ControllersUnauthorizedResponse,
  OauthClientRegistrationRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Oauth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Called by the consent screen. On approval it upserts the user's grant, mints a one-shot authorization code bound to the client's PKCE challenge, and returns the URL to send the browser to. On denial — and on any error raised after redirect_uri has validated (bad PKCE method, unknown resource) — it returns the same shape carrying an `error` parameter instead of a code, because OAuth 2.1 makes the redirect the delivery channel for those. The redirect always carries `iss` (RFC 9207).
   *
   * @tags oauth
   * @name AuthorizeCreate
   * @summary Record consent and mint an authorization code
   * @request POST:/oauth/authorize
   * @secure
   */
  authorizeCreate = (body: ControllersOauthAuthorizeRequest, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessControllersOauthAuthorizeResult,
      ControllersApiWarningResponse | ControllersUnauthorizedResponse | ControllersApiErrorResponse
    >({
      path: `/oauth/authorize`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Resolves the client behind client_id (pre-registered row, or its client-id metadata document), validates the redirect_uri against the client's registered list, and returns what the consent screen must render. The screen shows client_host and redirect_host — the verified facts — not the self-asserted client_name.
   *
   * @tags oauth
   * @name AuthorizeContextList
   * @summary Consent screen context
   * @request GET:/oauth/authorize-context
   * @secure
   */
  authorizeContextList = (
    query: {
      /** Client ID (an https CIMD URL, or a pre-registered id) */
      client_id: string;
      /** Where the code will be delivered */
      redirect_uri: string;
      /** Space-delimited requested scopes */
      scope?: string;
      /** Client state, echoed on the redirect */
      state?: string;
      /** PKCE S256 challenge */
      code_challenge?: string;
      /** Must be S256 */
      code_challenge_method?: string;
      /** RFC 8707 resource indicator */
      resource?: string;
      /** Must be code */
      response_type?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ControllersApiSuccessControllersOauthAuthorizeContext,
      ControllersApiWarningResponse | ControllersUnauthorizedResponse | ControllersApiErrorResponse
    >({
      path: `/oauth/authorize-context`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Every application the caller has authorized, most recently used first.
   *
   * @tags oauth
   * @name GrantsList
   * @summary Connected applications
   * @request GET:/oauth/grants
   * @secure
   */
  grantsList = (params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessArrayControllersOauthGrantView,
      ControllersUnauthorizedResponse | ControllersApiErrorResponse
    >({
      path: `/oauth/grants`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Revokes the grant and every access and refresh token minted under it, so access stops on the next request rather than whenever the current access token happens to expire.
   *
   * @tags oauth
   * @name GrantsDelete
   * @summary Disconnect an application
   * @request DELETE:/oauth/grants/{id}
   * @secure
   */
  grantsDelete = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessNoData, ControllersUnauthorizedResponse | ControllersApiErrorResponse>({
      path: `/oauth/grants/${id}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description RFC 7591 §3.1. Registers a PUBLIC client (PKCE, no secret) and returns an opaque client_id. PUBLIC — no JWT. This is the FALLBACK path: clients that implement client-id metadata documents should use those instead (see `client_id_metadata_document_supported`), and this endpoint exists for the many MCP clients that cannot. The response is raw RFC 7591 JSON, NOT the ApiSuccess envelope, because a registering client parses it literally. No client_secret and no RFC 7592 management credentials are ever issued.
   *
   * @tags oauth, internal
   * @name RegisterCreate
   * @summary OAuth 2.0 dynamic client registration
   * @request POST:/oauth/register
   */
  registerCreate = (body: OauthClientRegistrationRequest, params: RequestParams = {}) =>
    this.request<ControllersOauthClientRegistrationResponse, ControllersOauthProtocolError>({
      path: `/oauth/register`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description RFC 7009. Revokes an access or refresh token. PUBLIC, form-urlencoded. Always answers 200 — including for an unknown token, so the endpoint cannot be used to probe token validity (§2.2).
   *
   * @tags oauth, internal
   * @name RevokeCreate
   * @summary OAuth 2.0 token revocation
   * @request POST:/oauth/revoke
   */
  revokeCreate = (
    data: {
      /** The token to revoke */
      token: string;
      /** access_token | refresh_token (advisory only) */
      token_type_hint?: string;
      /** Client ID */
      client_id?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessNoData, any>({
      path: `/oauth/revoke`,
      method: "POST",
      body: data,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
  /**
   * @description RFC 6749 §3.2. Exchanges an authorization code (PKCE S256) or a refresh token for an access token. PUBLIC — no JWT. Request body is application/x-www-form-urlencoded; the response is raw RFC 6749 JSON, NOT the ApiSuccess envelope, because OAuth clients parse it literally.
   *
   * @tags oauth, internal
   * @name TokenCreate
   * @summary OAuth 2.1 token endpoint
   * @request POST:/oauth/token
   */
  tokenCreate = (
    data: {
      /** authorization_code | refresh_token */
      grant_type: string;
      /** Authorization code (authorization_code grant) */
      code?: string;
      /** Must match the URI the code was issued to */
      redirect_uri?: string;
      /** Client ID (a CIMD https URL, or a pre-registered id) */
      client_id: string;
      /** PKCE verifier (authorization_code grant) */
      code_verifier?: string;
      /** Refresh token (refresh_token grant) */
      refresh_token?: string;
      /** RFC 8707 resource indicator */
      resource?: string;
      /** urn:ietf:params:oauth:client-assertion-type:jwt-bearer */
      client_assertion_type?: string;
      /** private_key_jwt assertion (RFC 7523) */
      client_assertion?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersOauthTokenResponse, ControllersOauthProtocolError>({
      path: `/oauth/token`,
      method: "POST",
      body: data,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
}
