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
  ControllersApiSuccessServicesChartCandleSources,
  ControllersApiSuccessServicesChartCandles,
  ControllersUnauthorizedResponse,
  ServicesValidationErrorResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Candles<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves historical candlestick data for a given exchange, symbol, and time interval. Either a timeframe 'tf' or an 'interval' must be provided. Each row is `[openTime, open, high, low, close, volume, turnover]` where turnover is the quote-asset volume.
   *
   * @tags candles
   * @name ListList
   * @summary Retrieve Candlestick Data
   * @request GET:/candles/list
   * @secure
   */
  listList = (
    query: {
      /** Exchange ID */
      exchange_id: number;
      /** Symbol */
      symbol: number;
      /** Timeframe */
      tf?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21;
      /**
       * Interval
       * @example ""1s","3s","5s","15s","30s","1m","3m","5m","15m","30m","1h","2h","4h","6h","12h","1d","3d","1w""
       */
      interval?: string;
      /** From unix timestamp */
      from?: number;
      /** To unix timestamp */
      to?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<any[][], ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/candles/list`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description One backward page of chart bars (1s–30m) for the venues whose public trades we ingest (Binance, Bybit, OKX — futures and spot). Never calls an exchange. Each bar is `[openTime, open, high, low, close, volume, quoteVolume]`, ascending; `openTime` is the epoch-aligned UTC bucket start. The page covers `[max(to − limit×interval, coverage_from), to)`; `to` is exclusive. A bucket starting before `coverage_from` is never returned. `reached_start` means nothing older is stored: fetch older ranges from the exchange. An empty page with `reached_start: false` is a quiet window (no trades) — keep paging. 1m–30m answer 400 for a venue whose switch is off (see /candles/sources); 1s/5s/15s are served for every ingested venue. `coarse` (1s/5s/15s only, omitted when empty) lists the `openTime` of bars that hold a coarse 1m patch: the store had no exact 1s source for that minute (Bybit) and holds the exchange's 1m bar as one row at :00, so the minute shows as one bar. At 1m and up such a minute is exact and nothing is flagged.
   *
   * @tags candles
   * @name ChartList
   * @summary Chart candles from the local 1s store
   * @request GET:/candles/chart
   */
  chartList = (
    query: {
      /** Exchange ID (pseudo ids resolve to their venue) */
      exchange_id: number;
      /** Symbol */
      symbol: string;
      /** Interval */
      interval: "1s" | "5s" | "15s" | "1m" | "5m" | "15m" | "30m";
      /** Exclusive upper bound, unix ms (default now) */
      to?: number;
      /** Buckets, 1..1000 (1..5000 at 1s); default 100 (1000 at 1s) */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ControllersApiSuccessServicesChartCandles,
      ServicesValidationErrorResponse | string | ControllersApiErrorResponse
    >({
      path: `/candles/chart`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description The per-venue switch for /candles/chart. A listed venue's chart reads the listed intervals from /candles/chart; any other venue keeps its exchange path.
   *
   * @tags candles
   * @name SourcesList
   * @summary Venues whose chart candles come from the local store
   * @request GET:/candles/sources
   */
  sourcesList = (params: RequestParams = {}) =>
    this.request<ControllersApiSuccessServicesChartCandleSources, string>({
      path: `/candles/sources`,
      method: "GET",
      format: "json",
      ...params,
    });
}
