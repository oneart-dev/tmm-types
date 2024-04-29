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
      api_key_id?: number[];
      /**
       * string based params separated by ":"
       * "not:" - exclude trades with api key ids specified
       */
      api_key_id_params?: "not:";
      /**
       * Trades by default have no category.
       * ID 1 is system category for archive trades. Excluded by default.
       */
      category?: number[];
      /**
       * string based params separated by ":"
       * "not:" - exclude trades with category ids specified
       */
      category_params?: "not:";
      /** @example "2019-01-01,2019-01-02" */
      closeBetween?: string;
      /**
       * Days of week 1=Sunday, 2=Monday, 3=Tuesday, 4=Wednesday, 5=Thursday, 6=Friday, 7=Saturday
       * @example [2]
       */
      daysOfWeek?: number[];
      /**
       * Duration specified in milliseconds
       * Example: 1000,10000 - trades with duration between 1 and 10 seconds
       */
      durationBetween?: string;
      /** @example "today" */
      durationType?: "today" | "yesterday" | "past1w" | "1w" | "1m" | "7d" | "30d" | "90d";
      /** @example "conclusion:empty" */
      extraInfo?:
        | "conclusion:empty"
        | "conclusion:not-empty"
        | "desc:empty"
        | "desc:not-empty"
        | "mentor_note:not-empty"
        | "mentor_note:empty";
      /** Used in summary widget settings */
      groupBy?: "minute" | "hour" | "month" | "date" | "week";
      /** Headers are required only for CSV export method */
      headers?: string[];
      /** @example 1 */
      id?: number;
      /** @example [1] */
      ids?: number[];
      /** @example "0.5,1.5" */
      leverageBetween?: string;
      /** @example "-0.5,-1.5" */
      maeBetween?: string;
      /** @example "0.5,1.5" */
      mfeBetween?: string;
      multiplier?: string;
      /** @example "2019-01-01,2019-01-02" */
      openBetween?: string;
      /** @example "0.5,1.5" */
      percentBetween?: string;
      profitBetween?: string;
      /** @example "0.5,1.5" */
      profitDepositBetween?: string;
      side?: "LONG" | "SHORT";
      /** Select only open or only closed trades. */
      state?: 0 | 1 | 2;
      /** @example ["BTCUSDT"] */
      symbol?: string[];
      /** @example "not:" */
      symbol_params?: "not:";
      tags?: number[];
      /**
       * string based params separated by ":"
       * "not:" - exclude trades with tags specified
       * "all:" - all provided tags must be included/excluded
       * @example "not:all:"
       */
      tags_params?: "not:" | "all:" | "not:all:";
      /** Default value comes from user profile settings. By default is "open_time" */
      trade_time?: string;
      /** @example 1 */
      user_id?: number;
      /**
       * Turnover in USD - including all buy and sell orders value
       * @example "0.5,1.5"
       */
      volumeBetween?: string;
      volumeFrom?: number;
      volumeTo?: number;
      /**
       * By default archive trades are not included. If you want to include them,
       * set this to true. Or set category id to 1 (Archive ID).
       */
      with_archive?: boolean;
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
