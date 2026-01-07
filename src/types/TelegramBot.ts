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
  ControllersTelegramListResponse,
  ControllersUnauthorizedResponse,
  DtoTelegramConnectForm,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class TelegramBot<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a list of all Telegram bot connections for the user.
   *
   * @tags telegram-bot
   * @name TelegramBotList
   * @summary List Telegram Bot Connections
   * @request GET:/telegram-bot
   * @secure
   */
  telegramBotList = (params: RequestParams = {}) =>
    this.request<
      ControllersTelegramListResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/telegram-bot`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new Telegram bot connection.
   *
   * @tags telegram-bot
   * @name TelegramBotUpdate
   * @summary Create Telegram Bot Connection
   * @request PUT:/telegram-bot
   * @secure
   */
  telegramBotUpdate = (payload: DtoTelegramConnectForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/telegram-bot`,
        method: "PUT",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Updates the settings for a Telegram bot connection.
   *
   * @tags telegram-bot
   * @name TelegramBotCreate
   * @summary Update Telegram Bot Connection
   * @request POST:/telegram-bot/{id}
   * @secure
   */
  telegramBotCreate = (id: number, payload: DtoTelegramConnectForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/telegram-bot/${id}`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Deletes a Telegram bot connection.
   *
   * @tags telegram-bot
   * @name TelegramBotDelete
   * @summary Delete Telegram Bot Connection
   * @request DELETE:/telegram-bot/{id}
   * @secure
   */
  telegramBotDelete = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/telegram-bot/${id}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
}
