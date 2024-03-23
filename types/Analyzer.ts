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
  ControllersAnalyzerNotesResponse,
  ControllersAnalyzerWeekResponse,
  ControllersApiErrorResponse,
  ControllersApiSuccessResponse,
  ControllersApiWarningResponse,
  ControllersTradeChartDrawingsResponse,
  ControllersUnauthorizedResponse,
  DtoAnalyzerNoteForm,
  DtoSymbolChartForm,
  ServicesAnalyzerWeekListResponse,
  ServicesTradeChartResponse,
  ServicesValidationErrorResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Analyzer<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Trading summary by week or day. Include balance history only for premium membership
   *
   * @tags analyzer
   * @name AnalyzerList
   * @summary Trading summary by week or day
   * @request GET:/analyzer/
   * @secure
   */
  analyzerList = (
    query?: {
      /** Filter: Type: week, day, month */
      type?: string;
      /** Trade ID */
      id?: number;
      /** Trade IDs */
      ids?: number[];
      /** Api key id */
      api_key_id?: number[];
      /** Entry reason tag id */
      tags?: number[];
      /**
       * Trade time based on open time or close time
       * @default "open_time"
       */
      trade_time?: string;
      /** Date period based on trade_time variable */
      durationType?: "today" | "yesterday" | "past1w" | "1w" | "1m" | "7d" | "30d" | "90d";
      /**
       * trade entry date
       * @example ""2019-01-01,2019-01-31""
       */
      openBetween?: string;
      /**
       * trade exit date
       * @example ""2019-01-01,2019-01-31""
       */
      closeBetween?: string;
      /**
       * trade percent
       * @example ""1,2.5""
       */
      percentBetween?: string;
      /**
       * trade net profit
       * @example ""100,2500""
       */
      profitBetween?: string;
      /**
       * trade duration in milliseconds. Example: '1,60000' 1 minute max
       * @example ""1000,60000""
       */
      durationBetween?: string;
      /**
       * trade leverage. Example: '0.5,3.5' from 0.5x to 3.5x
       * @example ""0.5,3.5""
       */
      leverageBetween?: string;
      /** trade side */
      side?: "SHORT" | "LONG";
      /** User ID. Only available for mentors to see students trades */
      user_id?: string;
      /** Category ID (1 - Archive) */
      category_id?: number;
      /** Trade Volume from */
      volumeFrom?: number;
      /** Trade Volume to */
      volumeTo?: number;
      /** Days of week 1=Sunday, 2=Monday, 3=Tuesday, 4=Wednesday, 5=Thursday, 6=Friday, 7=Saturday */
      daysOfWeek?: number[];
      /** trade ticker */
      symbol?: string[];
      /** trade extra info filled by user */
      extraInfo?:
        | "conclusion:empty"
        | "conclusion:not-empty"
        | "desc:empty"
        | "desc:not-empty"
        | "mentor_note:not-empty"
        | "mentor_note:empty";
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ControllersAnalyzerWeekResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/analyzer/`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get list of all analyzer notes added by user
   *
   * @tags analyzer
   * @name NotesList
   * @summary Get analyzer notes
   * @request GET:/analyzer/notes
   * @secure
   */
  notesList = (
    query?: {
      /** Filter: Type: 2 - day, 3 - week, 4 - month */
      type?: number;
      /**
       * Filter: filtering by note date
       * @example "2019-01-01,2019-01-31"
       */
      dateBetween?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ControllersAnalyzerNotesResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/analyzer/notes`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update or create analyzer note. If id provided it will update existing note otherwise it will create new one
   *
   * @tags analyzer
   * @name NotesCreate
   * @summary Update or create
   * @request POST:/analyzer/notes
   * @secure
   */
  notesCreate = (payload: DtoAnalyzerNoteForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      ServicesValidationErrorResponse | ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/analyzer/notes`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Trading summary by week or day. Include balance history only for premium membership
   *
   * @tags analyzer
   * @name WeekListList
   * @summary Trading summary by week or day
   * @request GET:/analyzer/week-list
   * @secure
   */
  weekListList = (
    query?: {
      /** Filter: Api key id */
      api_key_id?: number[];
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ServicesAnalyzerWeekListResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/analyzer/week-list`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description get user drawings on the chart
   *
   * @tags analyzer
   * @name ChartDataCreate
   * @summary get data for chart
   * @request POST:/analyzer/{ticker}/chart-data
   * @secure
   */
  chartDataCreate = (ticker: string, params: RequestParams = {}) =>
    this.request<
      ControllersTradeChartDrawingsResponse,
      | ServicesValidationErrorResponse
      | ControllersUnauthorizedResponse
      | ControllersApiWarningResponse
      | string
      | ControllersApiErrorResponse
    >({
      path: `/analyzer/${ticker}/chart-data`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get klines for chart with interval selected. Will include user drawings on the chart
   *
   * @tags analyzer
   * @name LoadCandlesDataCreate
   * @summary get klines for chart
   * @request POST:/analyzer/{ticker}/loadCandlesData
   * @deprecated
   * @secure
   */
  loadCandlesDataCreate = (ticker: string, payload: DtoSymbolChartForm, params: RequestParams = {}) =>
    this.request<
      ServicesTradeChartResponse,
      | ServicesValidationErrorResponse
      | ControllersUnauthorizedResponse
      | ControllersApiWarningResponse
      | string
      | ControllersApiErrorResponse
    >({
      path: `/analyzer/${ticker}/loadCandlesData`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
