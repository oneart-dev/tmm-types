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
   * @description List of all discord bot connections
   *
   * @tags discord-bot
   * @name DiscordBotList
   * @summary List
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
   * @description Create discord bot connection
   *
   * @tags discord-bot
   * @name DiscordBotUpdate
   * @summary Create
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
   * @description Update discord bot settings
   *
   * @tags discord-bot
   * @name DiscordBotCreate
   * @summary Update
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
   * @description Delete discord bot connection
   *
   * @tags discord-bot
   * @name DiscordBotDelete
   * @summary Delete discord bot connection
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
