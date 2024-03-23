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
   * @description Create new SSE stream on server and get stream ID (string). After that you can use this stream ID to receive messages from server.
   *
   * @tags sse
   * @name ConnectCreate
   * @summary Create new SSE stream
   * @request POST:/sse/connect
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
