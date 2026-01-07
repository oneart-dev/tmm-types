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
  ControllersDiscordListResponse,
  ControllersUnauthorizedResponse,
  DtoTelegramConnectForm,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class DiscordBot<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a list of all Discord bot connections for the user.
   *
   * @tags discord-bot
   * @name DiscordBotList
   * @summary List Discord Bot Connections
   * @request GET:/discord-bot
   * @secure
   */
  discordBotList = (params: RequestParams = {}) =>
    this.request<
      ControllersDiscordListResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/discord-bot`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new Discord bot connection.
   *
   * @tags discord-bot
   * @name DiscordBotUpdate
   * @summary Create Discord Bot Connection
   * @request PUT:/discord-bot
   * @secure
   */
  discordBotUpdate = (payload: DtoTelegramConnectForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/discord-bot`,
        method: "PUT",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Updates the settings for a Discord bot connection.
   *
   * @tags discord-bot
   * @name DiscordBotCreate
   * @summary Update Discord Bot Connection
   * @request POST:/discord-bot/{id}
   * @secure
   */
  discordBotCreate = (id: number, payload: DtoTelegramConnectForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/discord-bot/${id}`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Deletes a Discord bot connection.
   *
   * @tags discord-bot
   * @name DiscordBotDelete
   * @summary Delete Discord Bot Connection
   * @request DELETE:/discord-bot/{id}
   * @secure
   */
  discordBotDelete = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/discord-bot/${id}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
}
