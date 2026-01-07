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
  ControllersApiSuccessArrayServicesTradeCountByWeek,
  ControllersApiSuccessResponse,
  ControllersApiSuccessString,
  ControllersApiWarningResponse,
  ControllersUnauthorizedResponse,
  DtoAnalyzerNoteForm,
  DtoSymbolChartForm,
  ServicesTradeChartResponse,
  ServicesValidationErrorResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Analyzer<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Provides a detailed trading summary for a specific week, day, or month. Balance history is included for premium members. Use 'skipData' and 'skipBalance' parameters to exclude trade data or balance history for a faster response.
   *
   * @tags analyzer
   * @name AnalyzerList
   * @summary Get Detailed Trading Analysis by Time Period
   * @request GET:/analyzer/
   * @secure
   */
  analyzerList = (
    query?: {
      /** Pass true to skip trade data */
      skipData?: boolean;
      /** Pass true to skip balance history */
      skipBalance?: boolean;
      /** Filter: Type: week, day, month */
      type?: string;
      api_key_id?: number[];
      /**
       * string based params separated by ":"
       * "not:" - exclude trades with api key ids specified
       */
      api_key_id_params?: "not:";
      /** @example "0,10000" */
      avgTrades15m6h?: string;
      /** @example "0,40000" */
      avgTrades1h24h?: string;
      /**
       * Moving averages of trades
       * @example "0,1000"
       */
      avgTrades1m30m?: string;
      /** @example "0,20000" */
      avgTrades30m12h?: string;
      /** @example "0,5000" */
      avgTrades5m2h?: string;
      /** @example "0,1000000" */
      avgVolume15m6h?: string;
      /** @example "0,5000000" */
      avgVolume1h24h?: string;
      /**
       * Moving averages of volume
       * @example "0,100000"
       */
      avgVolume1m30m?: string;
      /** @example "0,2000000" */
      avgVolume30m12h?: string;
      /** @example "0,500000" */
      avgVolume5m2h?: string;
      /** @example "-0.8,0.8" */
      btcCorr1m50?: string;
      /**
       * BTC correlation [-1,1]
       * @example "-0.8,0.8"
       */
      btcCorr5m20?: string;
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
      exit_tags?: number[];
      /**
       * string based params separated by ":"
       * "not:" - exclude trades with tags specified
       * "all:" - all provided tags must be included/excluded
       * "only:" - trades with tags specified only
       * @example "not:all:"
       */
      exit_tags_params?: "not:" | "all:" | "not:all:" | "only:";
      /** @example "conclusion:empty" */
      extraInfo?:
        | "conclusion:empty"
        | "conclusion:not-empty"
        | "desc:empty"
        | "desc:not-empty"
        | "mentor_note:not-empty"
        | "mentor_note:empty";
      /**
       * Funding rate, e.g. "-0.01,0.01"
       * @example "-0.01,0.01"
       */
      fundingRate?: string;
      /** Used in summary widget settings */
      groupBy?: "minute" | "hour" | "month" | "date" | "week";
      /** Headers are required only for CSV export method */
      headers?: string[];
      hours_of_day?: number[];
      /**
       * string based params separated by ":"
       * "not:" - exclude trades with hours specified
       */
      hours_of_day_params?: string;
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
      /** @example "0,2" */
      natr1m30?: string;
      /**
       * NATR
       * @example "0,2"
       */
      natr5m14?: string;
      /** @example "2019-01-01,2019-01-02" */
      openBetween?: string;
      /** @example "0.5,1.5" */
      percentBetween?: string;
      /** @example "-2,2" */
      priceRange12h?: string;
      /** @example "-2,2" */
      priceRange15m?: string;
      /** @example "-2,2" */
      priceRange1h?: string;
      /**
       * Price range (normalized), e.g. "-2,2"
       * @example "-2,2"
       */
      priceRange1m?: string;
      /** @example "-2,2" */
      priceRange24h?: string;
      /** @example "-2,2" */
      priceRange2h?: string;
      /** @example "-2,2" */
      priceRange30m?: string;
      /** @example "-2,2" */
      priceRange4h?: string;
      /** @example "-2,2" */
      priceRange5m?: string;
      /** @example "-2,2" */
      priceRange6h?: string;
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
       * "only:" - trades with tags specified only
       * @example "not:all:"
       */
      tags_params?: "not:" | "all:" | "not:all:" | "only:";
      /** Default value comes from user profile settings. By default is "open_time" */
      trade_time?: string;
      /** @example "0,150000" */
      trades12h?: string;
      /** @example "0,10000" */
      trades15m?: string;
      /** @example "0,40000" */
      trades1h?: string;
      /**
       * Trades count per window
       * @example "0,1000"
       */
      trades1m?: string;
      /** @example "0,200000" */
      trades24h?: string;
      /** @example "0,60000" */
      trades2h?: string;
      /** @example "0,20000" */
      trades30m?: string;
      /** @example "0,80000" */
      trades4h?: string;
      /** @example "0,5000" */
      trades5m?: string;
      /** @example "0,100000" */
      trades6h?: string;
      /** @example "-3,3" */
      tradesSpike15m6h?: string;
      /** @example "-3,3" */
      tradesSpike1h24h?: string;
      /**
       * Trades spikes
       * @example "-3,3"
       */
      tradesSpike1m30m?: string;
      /** @example "-3,3" */
      tradesSpike30m12h?: string;
      /** @example "-3,3" */
      tradesSpike5m2h?: string;
      /** @example 1 */
      user_id?: number;
      /** @example "0,20000000" */
      volume12h?: string;
      /** @example "0,1000000" */
      volume15m?: string;
      /** @example "0,5000000" */
      volume1h?: string;
      /**
       * Volumes (USD or native units—match your backend), counts per window
       * @example "0,100000"
       */
      volume1m?: string;
      /** @example "0,30000000" */
      volume24h?: string;
      /** @example "0,8000000" */
      volume2h?: string;
      /** @example "0,2000000" */
      volume30m?: string;
      /** @example "0,12000000" */
      volume4h?: string;
      /** @example "0,500000" */
      volume5m?: string;
      /** @example "0,16000000" */
      volume6h?: string;
      /**
       * Turnover in USD - including all buy and sell orders value
       * @example "0.5,1.5"
       */
      volumeBetween?: string;
      volumeFrom?: number;
      /** @example "-3,3" */
      volumeSpike15m6h?: string;
      /** @example "-3,3" */
      volumeSpike1h24h?: string;
      /**
       * Volume spikes (ratio/z-score as you define), keep 1h24h included
       * @example "-3,3"
       */
      volumeSpike1m30m?: string;
      /** @example "-3,3" */
      volumeSpike30m12h?: string;
      /** @example "-3,3" */
      volumeSpike5m2h?: string;
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
   * @description Fetches a list of all analyzer notes created by the user, with optional filtering by date range and note type.
   *
   * @tags analyzer
   * @name NotesList
   * @summary Retrieve Analyzer Notes
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
   * @description Creates a new analyzer note or updates an existing one. If an ID is provided in the payload, the corresponding note will be updated; otherwise, a new note is created.
   *
   * @tags analyzer
   * @name NotesCreate
   * @summary Create or Update an Analyzer Note
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
   * @description Retrieves a trading summary aggregated by week or day. Balance history is only included for premium members.
   *
   * @tags analyzer
   * @name WeekListList
   * @summary Retrieve Trading Summary by Time Period
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
      ControllersApiSuccessArrayServicesTradeCountByWeek,
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
   * @description Retrieves user-created drawings for a specific chart symbol.
   *
   * @tags analyzer
   * @name ChartDataCreate
   * @summary Get Chart Drawings
   * @request POST:/analyzer/{symbol}/chart-data
   * @secure
   */
  chartDataCreate = (symbol: string, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessString,
      | ServicesValidationErrorResponse
      | ControllersUnauthorizedResponse
      | ControllersApiWarningResponse
      | string
      | ControllersApiErrorResponse
    >({
      path: `/analyzer/${symbol}/chart-data`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves historical Kline data (candlesticks) for a specified ticker and interval. The response includes any user-created drawings on the chart.
   *
   * @tags analyzer
   * @name LoadCandlesDataCreate
   * @summary Get Kline Data for a Ticker
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
