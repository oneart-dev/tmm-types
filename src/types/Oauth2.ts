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
  ControllersApiSuccessServicesApiUser,
  ControllersUnauthorizedResponse,
  DtoOauth2SwapForm,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Oauth2<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Use the Stream for Server-Sent Events (SSE) to receive messages from the server. Authorization must be provided through the Authorization header with a Bearer token or the API-KEY Header. Use a polyfill to modify the standard browser implementation if necessary. ## Events: | Event ID             | Return Object      | Description                                                                         | Action Required                                  | | -------------------- | ------------------ | ----------------------------------------------------------------------------------- | ------------------------------------------------ | | `trade`              | Trade              | Triggered only when a new trade is opened.                                          | None                                             | | `trades`             | Empty              | Signals to update the trades list. Common after an API key connection.              | Update trades list                               | | `profile`            | Empty              | Indicates a need to update user data.                                               | Update user data using `/auth/me`                | | `transaction`        | Empty              | Signals that the list of transactions and their payment statuses should be updated. | Update list of transactions and payment statuses | | `risk-management`    | RiskManagementLog  | Sent if a new risk management violation occurs.                                     | None                                             | | `trade-update`       | Trade              | Sent after trade data is updated, including new executions on the exchange.         | None                                             | | `notification`       | NotificationPublic | Indicates a new notification.                                                       | None                                             | | `apikey`             | ApiKey             | Sent when the API key's status changes, e.g., from disconnected to connected.       | None                                             | | `telegram-connected` | TelegramConnect    | Indicates a successful connection to Telegram.                                      | None                                             | | `discord-connected`  | DiscordConnect     | Indicates a successful connection to Discord.                                       | None                                             |
   *
   * @tags sse
   * @name GetOauth2
   * @summary SSE Stream for OAuth2 Clients
   * @request GET:/oauth2/sse/{key}
   * @secure
   */
  getOauth2 = (key: string, params: RequestParams = {}) =>
    this.request<void, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/oauth2/sse/${key}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description Exchanges a 1-minute temporary OAuth2 token for a permanent User API Key. This request must be authenticated with the 3rd party's service API key.
   *
   * @tags users
   * @name TokenCreate
   * @summary Exchange authorization code for API key
   * @request POST:/oauth2/token
   * @secure
   */
  tokenCreate = (payload: DtoOauth2SwapForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessServicesApiUser, ControllersUnauthorizedResponse>({
      path: `/oauth2/token`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
