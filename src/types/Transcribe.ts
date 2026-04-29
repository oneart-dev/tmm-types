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
  ControllersTranscribeResponse,
  ControllersTranscribeUsageResponse,
  ControllersUnauthorizedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Transcribe<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Accepts an audio recording (<= 25 MB / <= 10 min), transcribes it via OpenAI, enforces per-tier monthly quota, and returns the transcript text. Audio is NOT persisted server-side. Optional owner_type/owner_id link the transcription to an existing entity (e.g. a UserNote or Trade).
   *
   * @tags transcribe
   * @name TranscribeCreate
   * @summary Transcribe audio
   * @request POST:/transcribe
   * @secure
   */
  transcribeCreate = (
    data: {
      /**
       * Audio file (webm/mp4/mpeg/wav/ogg)
       * @format binary
       */
      audio: File;
      /** Optional owner model name (e.g. UserNote, Trade) */
      owner_type?: string;
      /** Optional owner ID */
      owner_id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersTranscribeResponse, ControllersApiErrorResponse | ControllersUnauthorizedResponse>({
      path: `/transcribe`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description Returns minutes used / remaining for this calendar month plus the user's tier model.
   *
   * @tags transcribe
   * @name UsageList
   * @summary Transcription usage report
   * @request GET:/transcribe/usage
   * @secure
   */
  usageList = (params: RequestParams = {}) =>
    this.request<ControllersTranscribeUsageResponse, ControllersUnauthorizedResponse>({
      path: `/transcribe/usage`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
