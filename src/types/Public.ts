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
  ControllersApiSuccessServicesPublicAnnouncementDetail,
  ControllersApiWarningResponse,
  ControllersPublicAnnouncementsListResponse,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Public<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns paginated published global announcements. No authentication required.
   *
   * @tags public_announcements
   * @name AnnouncementsList
   * @summary List public announcements
   * @request GET:/public/announcements
   */
  announcementsList = (
    query?: {
      /**
       * Items per page (1–50, default 20)
       * @default 20
       */
      limit?: number;
      /**
       * Offset for pagination
       * @default 0
       */
      offset?: number;
      /**
       * Language code (e.g. en, ru). Falls back to en.
       * @default "en"
       */
      lang?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersPublicAnnouncementsListResponse, ControllersApiErrorResponse>({
      path: `/public/announcements`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a single published global announcement. No authentication required.
   *
   * @tags public_announcements
   * @name AnnouncementsDetail
   * @summary Get public announcement by slug
   * @request GET:/public/announcements/{slug}
   */
  announcementsDetail = (
    slug: string,
    query?: {
      /**
       * Language code (e.g. en, ru). Falls back to en.
       * @default "en"
       */
      lang?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ControllersApiSuccessServicesPublicAnnouncementDetail,
      ControllersApiWarningResponse | ControllersApiErrorResponse
    >({
      path: `/public/announcements/${slug}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
