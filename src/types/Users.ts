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
  ControllersBulkSignUpSuccessResponse,
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
   * @description Updates account details for the authenticated user. If the email address is changed, the account status reverts to 'unverified' until the new address is confirmed. Returns an updated access token on success.
   *
   * @tags users
   * @name UsersCreate
   * @summary Update profile settings
   * @request POST:/users
   * @secure
   */
  usersCreate = (payload: DtoUserUpdateForm, params: RequestParams = {}) =>
    this.request<ControllersLoginSuccessResponse, ServicesValidationErrorResponse | ControllersApiErrorResponse>({
      path: `/users`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description System-level endpoint to register multiple users and automatically create API keys for each.
   *
   * @tags users
   * @name BulkCreateCreate
   * @summary Bulk register users
   * @request POST:/users/bulk-create
   */
  bulkCreateCreate = (payload: string[], params: RequestParams = {}) =>
    this.request<ControllersBulkSignUpSuccessResponse, ServicesValidationErrorResponse>({
      path: `/users/bulk-create`,
      method: "POST",
      body: payload,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Enables or disables the integration with CVizor services. Requires an existing CVizor account linked to the user.
   *
   * @tags users
   * @name CvizorTogglerCreate
   * @summary Toggle CVizor synchronization
   * @request POST:/users/cvizor-toggler
   * @secure
   */
  cvizorTogglerCreate = (params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersApiErrorResponse>({
      path: `/users/cvizor-toggler`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Updates the user's primary email address. This action is only permitted if the account is not yet verified. Use this to correct typos during registration.
   *
   * @tags users
   * @name EmailCreate
   * @summary Modify account email
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
   * @description Saves the user's progress within the platform's onboarding guides or tutorials.
   *
   * @tags users
   * @name GuideCreate
   * @summary Sync onboarding progress
   * @request POST:/users/guide
   * @secure
   */
  guideCreate = (payload: ServicesGuideProgress, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ServicesValidationErrorResponse>({
      path: `/users/guide`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Updates the account's language setting for localized notifications, emails, and UI elements.
   *
   * @tags users
   * @name LanguageCreate
   * @summary Set preferred language
   * @request POST:/users/language
   * @secure
   */
  languageCreate = (payload: DtoUserLanguage, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, any>({
      path: `/users/language`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Fetches the settings and current state of the authenticated user's public profile.
   *
   * @tags users
   * @name MyPublicProfileList
   * @summary Get own public profile configuration
   * @request GET:/users/my-public-profile
   * @secure
   */
  myPublicProfileList = (params: RequestParams = {}) =>
    this.request<ControllersPublicProfileResponse, any>({
      path: `/users/my-public-profile`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Updates settings for the public profile. Note: Active participation in the global 'Top Traders' rankings requires a verified, enabled public profile.
   *
   * @tags users
   * @name PublicProfileCreate
   * @summary Modify public profile configuration
   * @request POST:/users/public-profile/{id}
   * @secure
   */
  publicProfileCreate = (id: number, payload: DtoPublicProfileUpdateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ServicesValidationErrorResponse>({
      path: `/users/public-profile/${id}`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Generates performance statistics for the current user's potential public profile. Works even if the profile is currently disabled.
   *
   * @tags users
   * @name PublicStatsList
   * @summary Preview own public statistics
   * @request GET:/users/public/stats
   * @secure
   */
  publicStatsList = (params: RequestParams = {}) =>
    this.request<ControllersPublicProfileStatsResponse, any>({
      path: `/users/public/stats`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves a trader's public profile information using their unique URL alias.
   *
   * @tags users
   * @name PublicDetail
   * @summary Fetch public profile by URL
   * @request GET:/users/public/{url}
   */
  publicDetail = (url: string, params: RequestParams = {}) =>
    this.request<ControllersPublicProfileResponse, ControllersApiErrorResponse>({
      path: `/users/public/${url}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves detailed trading performance metrics for a public profile. Results can be filtered by specific durations.
   *
   * @tags users
   * @name PublicStatsDetail
   * @summary Fetch trading statistics for a public profile
   * @request GET:/users/public/{url}/stats
   */
  publicStatsDetail = (
    url: string,
    query?: {
      /** Timeframe filter: today, 1w, 30d, 90d */
      durationType?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersPublicProfileStatsResponse, any>({
      path: `/users/public/${url}/stats`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves a paginated list of shared trades for a specific public profile.
   *
   * @tags users
   * @name PublicTradesDetail
   * @summary List trades for a public profile
   * @request GET:/users/public/{url}/trades
   */
  publicTradesDetail = (
    url: string,
    query?: {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /**
       * Limit per page
       * @min 1
       * @max 150
       * @default 20
       */
      itemsPerPage?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ServicesTradesListPagination, any>({
      path: `/users/public/${url}/trades`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Changes the user's unique referral code. This code must be globally unique and follows specific formatting rules.
   *
   * @tags users
   * @name ReferralCodeCreate
   * @summary Update personal referral alias
   * @request POST:/users/referral-code
   * @secure
   */
  referralCodeCreate = (payload: DtoUserReferralCode, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ServicesValidationErrorResponse>({
      path: `/users/referral-code`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Persists the user's preference for Dark Mode (true) or Light Mode (false).
   *
   * @tags users
   * @name ThemeCreate
   * @summary Update UI theme preference
   * @request POST:/users/theme
   * @secure
   */
  themeCreate = (payload: DtoUserTheme, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, any>({
      path: `/users/theme`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of top-performing traders globally or within a specific league (e.g., Novice vs. Pro). Data is cached for 10 minutes.
   *
   * @tags users
   * @name TopTradersDetail
   * @summary Get top traders leaderboard
   * @request GET:/users/top-traders/{league}
   * @secure
   */
  topTradersDetail = (league: number, params: RequestParams = {}) =>
    this.request<ControllersTopTradersSuccessResponse, any>({
      path: `/users/top-traders/${league}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves statistics regarding the user's referral network, including total referral count and aggregate earnings.
   *
   * @tags users
   * @name ReferralsSummaryDetail
   * @summary Get referral performance summary
   * @request GET:/users/{id}/referrals/summary
   * @secure
   */
  referralsSummaryDetail = (id: string, params: RequestParams = {}) =>
    this.request<ControllersReferralSummaryResponse, any>({
      path: `/users/${id}/referrals/summary`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
