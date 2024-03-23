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
  ControllersLoginSuccessResponse,
  ControllersPublicProfileResponse,
  ControllersPublicProfileStatsResponse,
  ControllersReferralSummaryResponse,
  ControllersTopTradersSuccessResponse,
  DtoPasswordResetCredentials,
  DtoPublicProfileUpdateForm,
  DtoUserLanguage,
  DtoUserReferralCode,
  DtoUserTheme,
  DtoUserUpdateForm,
  ServicesGuideProgress,
  ServicesTradesListPagination,
  ServicesValidationErrorResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Users<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Update current login user data. If email is changed, user have to confirm account by following the link in the email. On success new valid token will be returned.
   *
   * @tags users
   * @name UsersCreate
   * @summary Update user data
   * @request POST:/users
   * @secure
   */
  usersCreate = (payload: DtoUserUpdateForm, params: RequestParams = {}) =>
    this.request<
      ControllersLoginSuccessResponse,
      ServicesValidationErrorResponse | string | ControllersApiErrorResponse
    >({
      path: `/users`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Toggle CVizor connection
   *
   * @tags users
   * @name CvizorTogglerCreate
   * @summary Toggle CVizor connection
   * @request POST:/users/cvizor-toggler
   * @secure
   */
  cvizorTogglerCreate = (params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      void | ServicesValidationErrorResponse | string | ControllersApiErrorResponse
    >({
      path: `/users/cvizor-toggler`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Change user email. Only available until user verified his email. Intended for users who made a mistake in email
   *
   * @tags users
   * @name EmailCreate
   * @summary Change user email
   * @request POST:/users/email
   */
  emailCreate = (payload: DtoPasswordResetCredentials, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ServicesValidationErrorResponse | string | ControllersApiErrorResponse>(
      {
        path: `/users/email`,
        method: "POST",
        body: payload,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Save user guide progress
   *
   * @tags users
   * @name GuideCreate
   * @summary Update guide progress
   * @request POST:/users/guide
   * @secure
   */
  guideCreate = (payload: ServicesGuideProgress, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      void | ServicesValidationErrorResponse | string | ControllersApiErrorResponse
    >({
      path: `/users/guide`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update user language
   *
   * @tags users
   * @name LanguageCreate
   * @summary Update user language
   * @request POST:/users/language
   * @secure
   */
  languageCreate = (payload: DtoUserLanguage, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      void | ServicesValidationErrorResponse | string | ControllersApiErrorResponse
    >({
      path: `/users/language`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get public profile
   *
   * @tags users
   * @name MyPublicProfileList
   * @summary Get public profile
   * @request GET:/users/my-public-profile
   * @secure
   */
  myPublicProfileList = (params: RequestParams = {}) =>
    this.request<ControllersPublicProfileResponse, void | string>({
      path: `/users/my-public-profile`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update public profile. To participate in the top traders public profile is required and should be enabled.
   *
   * @tags users
   * @name PublicProfileCreate
   * @summary Update public profile
   * @request POST:/users/public-profile/{id}
   * @secure
   */
  publicProfileCreate = (id: number, payload: DtoPublicProfileUpdateForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      void | ServicesValidationErrorResponse | string | ControllersApiErrorResponse
    >({
      path: `/users/public-profile/${id}`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get public profile stats for user. Working if public profile is disabled. Intended for preview
   *
   * @tags users
   * @name PublicStatsList
   * @summary Get public profile stats for user
   * @request GET:/users/public/stats
   * @secure
   */
  publicStatsList = (params: RequestParams = {}) =>
    this.request<ControllersPublicProfileStatsResponse, void | string>({
      path: `/users/public/stats`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get public profile
   *
   * @tags users
   * @name PublicDetail
   * @summary Get public profile
   * @request GET:/users/public/{url}
   * @secure
   */
  publicDetail = (url: string, params: RequestParams = {}) =>
    this.request<ControllersPublicProfileResponse, void | string>({
      path: `/users/public/${url}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get public profile
   *
   * @tags users
   * @name PublicStatsDetail
   * @summary Get public profile
   * @request GET:/users/public/{url}/stats
   * @secure
   */
  publicStatsDetail = (
    url: string,
    query?: {
      /** today,1w,30d,90d */
      durationType?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersPublicProfileStatsResponse, void | string>({
      path: `/users/public/${url}/stats`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get public profile trades list with pagination support
   *
   * @tags users
   * @name PublicTradesDetail
   * @summary Get public profile trades list
   * @request GET:/users/public/{url}/trades
   * @secure
   */
  publicTradesDetail = (
    url: string,
    query?: {
      /**
       * Page
       * @default 1
       */
      page?: number;
      /** Sort by field */
      sortBy?: string;
      /**
       * Descending order
       * @default true
       */
      sortDesc?: boolean;
      /**
       * Items per page
       * @min 1
       * @max 150
       * @default 20
       */
      itemsPerPage?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ServicesTradesListPagination, void | string>({
      path: `/users/public/${url}/trades`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Change referral code to user specified one.
   *
   * @tags users
   * @name ReferralCodeCreate
   * @summary Change referral code.
   * @request POST:/users/referral-code
   * @secure
   */
  referralCodeCreate = (payload: DtoUserReferralCode, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      void | ServicesValidationErrorResponse | string | ControllersApiErrorResponse
    >({
      path: `/users/referral-code`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update dark mode theme. True - dark, false - light
   *
   * @tags users
   * @name ThemeCreate
   * @summary Update dark mode theme.
   * @request POST:/users/theme
   * @secure
   */
  themeCreate = (payload: DtoUserTheme, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      void | ServicesValidationErrorResponse | string | ControllersApiErrorResponse
    >({
      path: `/users/theme`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Return list of daily and monthly top traders belong to specified league. Max limit is 100.
   *
   * @tags users
   * @name TopTradersDetail
   * @summary Get top traders list
   * @request GET:/users/top-traders/{league}
   * @secure
   */
  topTradersDetail = (league: number, params: RequestParams = {}) =>
    this.request<ControllersTopTradersSuccessResponse, void | string>({
      path: `/users/top-traders/${league}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get referral count and earned amount
   *
   * @tags users
   * @name ReferralsSummaryDetail
   * @summary Get referral summary
   * @request GET:/users/{id}/referrals/summary
   * @secure
   */
  referralsSummaryDetail = (id: string, params: RequestParams = {}) =>
    this.request<ControllersReferralSummaryResponse, void | string>({
      path: `/users/${id}/referrals/summary`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
