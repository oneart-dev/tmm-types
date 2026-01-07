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
   * No description
   *
   * @tags sse
   * @name GetSse
   * @summary SSE Stream
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
   * @description Creates a new SSE stream on the server and returns a stream ID. This ID can then be used to receive messages from the server.
   *
   * @tags sse
   * @name ConnectCreate
   * @summary Create New SSE Stream
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
   * @description Removes an SSE stream from the server. For security, it is recommended to always disconnect after use.
   *
   * @tags sse
   * @name DisconnectCreate
   * @summary Remove SSE Stream
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
