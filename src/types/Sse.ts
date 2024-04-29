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
  ControllersSseConnectResponse,
  ControllersUnauthorizedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Sse<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Use the Stream for Server-Sent Events (SSE) to receive messages from the server. Authorization must be provided through the Authorization header with a Bearer token or the API-KEY Header. Use a polyfill to modify the standard browser implementation if necessary. ## Events: | Event ID             | Return Object      | Description                                                                         | Action Required                                  | | -------------------- | ------------------ | ----------------------------------------------------------------------------------- | ------------------------------------------------ | | `trade`              | Trade              | Triggered only when a new trade is opened.                                          | None                                             | | `trades`             | Empty              | Signals to update the trades list. Common after an API key connection.              | Update trades list                               | | `profile`            | Empty              | Indicates a need to update user data.                                               | Update user data using `/auth/me`                | | `transaction`        | Empty              | Signals that the list of transactions and their payment statuses should be updated. | Update list of transactions and payment statuses | | `risk-management`    | RiskManagementLog  | Sent if a new risk management violation occurs.                                     | None                                             | | `trade-update`       | Trade              | Sent after trade data is updated, including new executions on the exchange.         | None                                             | | `notification`       | NotificationPublic | Indicates a new notification.                                                       | None                                             | | `apikey`             | ApiKey             | Sent when the API key's status changes, e.g., from disconnected to connected.       | None                                             | | `telegram-connected` | TelegramConnect    | Indicates a successful connection to Telegram.                                      | None                                             | | `discord-connected`  | DiscordConnect     | Indicates a successful connection to Discord.                                       | None                                             |
   *
   * @tags sse
   * @name GetSse
   * @summary SSE stream
   * @request GET:/sse
   * @secure
   */
  getSse = (params: RequestParams = {}) =>
    this.request<void, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/sse`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description Create new SSE stream on server and get stream ID (string). After that you can use this stream ID to receive messages from server.
   *
   * @tags sse
   * @name ConnectCreate
   * @summary Create new SSE stream
   * @request POST:/sse/connect
   * @deprecated
   * @secure
   */
  connectCreate = (params: RequestParams = {}) =>
    this.request<ControllersSseConnectResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/sse/connect`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Remove SSE stream from server. For security always disconnect after use.
   *
   * @tags sse
   * @name DisconnectCreate
   * @summary Remove SSE stream
   * @request POST:/sse/disconnect
   * @deprecated
   * @secure
   */
  disconnectCreate = (params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/sse/disconnect`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
}
