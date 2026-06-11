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
  ControllersApiSuccessArrayServicesFeedNotificationUser,
  ControllersApiSuccessArrayServicesTeamChatRoom,
  ControllersApiSuccessArrayServicesTeamTopData,
  ControllersApiSuccessArrayServicesTeamWidgetConfig,
  ControllersApiSuccessNoData,
  ControllersApiSuccessResponse,
  ControllersApiSuccessServicesFeedNotificationComment,
  ControllersApiSuccessServicesTeam,
  ControllersApiSuccessServicesTeamChatRoom,
  ControllersApiSuccessServicesTeamChatRoomDetail,
  ControllersApiSuccessServicesTeamMember,
  ControllersApiSuccessServicesTeamWithStatsAndMember,
  ControllersApiSuccessServicesWidgetValue,
  ControllersApiWarningResponse,
  ControllersUnauthorizedResponse,
  DtoFeedNotificationCommentCreateForm,
  DtoTeamChatMuteForm,
  DtoTeamChatRoleForm,
  DtoTeamChatRoomCreateForm,
  DtoTeamCreateForm,
  DtoTeamMemberCreateForm,
  DtoTeamMemberUpdateForm,
  DtoTeamUpdateForm,
  DtoTeamWidgetForm,
  ServicesPaginationResponseArrayServicesTeamMember,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Team<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Creates a new, empty team. The owner is not required to be a member.
   *
   * @tags team
   * @name TeamUpdate
   * @summary Create New Team
   * @request PUT:/team
   * @secure
   */
  teamUpdate = (payload: DtoTeamCreateForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessServicesTeam,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/team`,
      method: "PUT",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves team details by ID, including a count of active members. If called by the owner, it also returns the pending members count. For private teams, an invite code is required to access data. If the user has a pending join request, their membership status will be returned. A user can revoke their join request at any time.
   *
   * @tags team
   * @name TeamDetail
   * @summary Get Team by ID
   * @request GET:/team/{id}
   * @secure
   */
  teamDetail = (
    id: number,
    query?: {
      /** Team invite code */
      invite_code?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ControllersApiSuccessServicesTeamWithStatsAndMember,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/team/${id}`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Updates a team's name and description.
   *
   * @tags team
   * @name TeamCreate
   * @summary Update Team
   * @request POST:/team/{id}
   * @secure
   */
  teamCreate = (id: number, payload: DtoTeamUpdateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/team/${id}`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Deletes a team.
   *
   * @tags team
   * @name TeamDelete
   * @summary Delete Team
   * @request DELETE:/team/{id}
   * @secure
   */
  teamDelete = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/team/${id}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags team_chat
   * @name ChatRoomsDetail
   * @summary List team chat rooms
   * @request GET:/team/{id}/chat/rooms
   * @secure
   */
  chatRoomsDetail = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessArrayServicesTeamChatRoom, any>({
      path: `/team/${id}/chat/rooms`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags team_chat
   * @name ChatRoomsCreate
   * @summary Create a team chat room
   * @request POST:/team/{id}/chat/rooms
   * @secure
   */
  chatRoomsCreate = (id: number, body: DtoTeamChatRoomCreateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessServicesTeamChatRoom, any>({
      path: `/team/${id}/chat/rooms`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags team_chat
   * @name ChatRoomsDetail2
   * @summary Get a room + latest messages
   * @request GET:/team/{id}/chat/rooms/{roomId}
   * @originalName chatRoomsDetail
   * @duplicate
   * @secure
   */
  chatRoomsDetail2 = (
    id: number,
    roomId: number,
    query?: {
      /** cursor: only messages with id < before */
      before?: number;
      /** page size (default 50, max 100) */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessServicesTeamChatRoomDetail, any>({
      path: `/team/${id}/chat/rooms/${roomId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags team_chat
   * @name ChatRoomsDelete
   * @summary Delete a team chat room
   * @request DELETE:/team/{id}/chat/rooms/{roomId}
   * @secure
   */
  chatRoomsDelete = (id: number, roomId: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessNoData, any>({
      path: `/team/${id}/chat/rooms/${roomId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags team_chat
   * @name ChatRoomsCommentCreate
   * @summary Post a message to a room
   * @request POST:/team/{id}/chat/rooms/{roomId}/comment
   * @secure
   */
  chatRoomsCommentCreate = (
    id: number,
    roomId: number,
    body: DtoFeedNotificationCommentCreateForm,
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessServicesFeedNotificationComment, any>({
      path: `/team/${id}/chat/rooms/${roomId}/comment`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags team_chat
   * @name ChatRoomsCommentsDetail
   * @summary Paginated room message history (load-older)
   * @request GET:/team/{id}/chat/rooms/{roomId}/comments
   * @secure
   */
  chatRoomsCommentsDetail = (
    id: number,
    roomId: number,
    query?: {
      /** cursor: only messages with id < before */
      before?: number;
      /** page size (default 50, max 100) */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessServicesTeamChatRoomDetail, any>({
      path: `/team/${id}/chat/rooms/${roomId}/comments`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags team_chat
   * @name ChatRoomsJoinCreate
   * @summary Join a team chat room
   * @request POST:/team/{id}/chat/rooms/{roomId}/join
   * @secure
   */
  chatRoomsJoinCreate = (id: number, roomId: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessNoData, any>({
      path: `/team/${id}/chat/rooms/${roomId}/join`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags team_chat
   * @name ChatRoomsLeaveCreate
   * @summary Leave a team chat room
   * @request POST:/team/{id}/chat/rooms/{roomId}/leave
   * @secure
   */
  chatRoomsLeaveCreate = (id: number, roomId: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessNoData, any>({
      path: `/team/${id}/chat/rooms/${roomId}/leave`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags team_chat
   * @name ChatRoomsMembersDetail
   * @summary List room members + roles
   * @request GET:/team/{id}/chat/rooms/{roomId}/members
   * @secure
   */
  chatRoomsMembersDetail = (id: number, roomId: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessArrayServicesFeedNotificationUser, any>({
      path: `/team/${id}/chat/rooms/${roomId}/members`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags team_chat
   * @name ChatRoomsMembersBanCreate
   * @summary Ban a member from a room
   * @request POST:/team/{id}/chat/rooms/{roomId}/members/{userId}/ban
   * @secure
   */
  chatRoomsMembersBanCreate = (id: number, roomId: number, userId: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessNoData, any>({
      path: `/team/${id}/chat/rooms/${roomId}/members/${userId}/ban`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags team_chat
   * @name ChatRoomsMembersMuteCreate
   * @summary Write-mute (read-only) a member
   * @request POST:/team/{id}/chat/rooms/{roomId}/members/{userId}/mute
   * @secure
   */
  chatRoomsMembersMuteCreate = (
    id: number,
    roomId: number,
    userId: number,
    body: DtoTeamChatMuteForm,
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessNoData, any>({
      path: `/team/${id}/chat/rooms/${roomId}/members/${userId}/mute`,
      method: "POST",
      body: body,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags team_chat
   * @name ChatRoomsMembersRoleCreate
   * @summary Set a member's room role
   * @request POST:/team/{id}/chat/rooms/{roomId}/members/{userId}/role
   * @secure
   */
  chatRoomsMembersRoleCreate = (
    id: number,
    roomId: number,
    userId: number,
    body: DtoTeamChatRoleForm,
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessNoData, any>({
      path: `/team/${id}/chat/rooms/${roomId}/members/${userId}/role`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags team_chat
   * @name ChatRoomsMembersUnbanCreate
   * @summary Unban a member from a room
   * @request POST:/team/{id}/chat/rooms/{roomId}/members/{userId}/unban
   * @secure
   */
  chatRoomsMembersUnbanCreate = (id: number, roomId: number, userId: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessNoData, any>({
      path: `/team/${id}/chat/rooms/${roomId}/members/${userId}/unban`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags team_chat
   * @name ChatRoomsMuteCreate
   * @summary Mute a room's notification sound for yourself
   * @request POST:/team/{id}/chat/rooms/{roomId}/mute
   * @secure
   */
  chatRoomsMuteCreate = (id: number, roomId: number, body: DtoTeamChatMuteForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessNoData, any>({
      path: `/team/${id}/chat/rooms/${roomId}/mute`,
      method: "POST",
      body: body,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags team_chat
   * @name ChatRoomsSeenCreate
   * @summary Mark a room read up to now
   * @request POST:/team/{id}/chat/rooms/{roomId}/seen
   * @secure
   */
  chatRoomsSeenCreate = (id: number, roomId: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessNoData, any>({
      path: `/team/${id}/chat/rooms/${roomId}/seen`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * @description Creates a request to join a team. For private teams, an invite code is required, and the team owner must approve the request.
   *
   * @tags team
   * @name JoinUpdate
   * @summary Join Team
   * @request PUT:/team/{id}/join
   * @secure
   */
  joinUpdate = (id: number, payload: DtoTeamMemberCreateForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessServicesTeamMember,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/team/${id}/join`,
      method: "PUT",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Allows a user to revoke a join request, or a team owner to accept or decline it. A revoked request cannot be altered by the team owner.
   *
   * @tags team
   * @name JoinCreate
   * @summary Update Join Request
   * @request POST:/team/{id}/join/{user_id}
   * @secure
   */
  joinCreate = (id: number, userId: number, payload: DtoTeamMemberUpdateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/team/${id}/join/${userId}`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Retrieves a list of team members. For private teams, this is available only to the team owner, who can also use filters for searching. Revoked members are not visible, and by default, only active members are shown.
   *
   * @tags team
   * @name MembersDetail
   * @summary Get Team Members
   * @request GET:/team/{id}/members
   * @secure
   */
  membersDetail = (
    id: number,
    query?: {
      /**
       * @min 1
       * @example 1
       */
      page?: number;
      itemsPerPage?: number;
      sortBy?: string;
      sortDesc?: boolean;
      /**
       * Partion name search is supported
       * @example "name"
       */
      name?: string;
      /** @example 1 */
      show_pnl?: 1 | 2;
      /**
       * Default value is 2 (active). Nobody can see revoked members.
       * @example 2
       */
      status?: 1 | 2 | 3 | 4;
      /**
       * @min 1
       * @example 1
       */
      user_id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ServicesPaginationResponseArrayServicesTeamMember,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/team/${id}/members`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves the top-performing members of a team.
   *
   * @tags team
   * @name GetTeam
   * @summary Get Top Team Members
   * @request GET:/team/{id}/top
   * @secure
   */
  getTeam = (
    id: number,
    query: {
      /** @example [1] */
      exchange_id?: (
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 41
        | 8
        | 9
        | 10
        | 40
        | 46
        | 11
        | 21
        | 23
        | 24
        | 25
        | 12
        | 22
        | 13
        | 14
        | 15
        | 32
        | 33
        | 42
        | 43
        | 44
        | 45
        | 50
        | 51
        | 52
        | 53
        | 54
        | 55
        | 56
        | 57
      )[];
      /** @example "today" */
      period: "today" | "yesterday" | "7days" | "14days" | "30days" | "custom";
      /** @example "false" */
      sortAsc?: "true" | "false";
      /** @example "pnl" */
      type: "pnl" | "percent" | "volume";
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ControllersApiSuccessArrayServicesTeamTopData,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/team/${id}/top`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the enabled widgets for a team, ordered by sort_order.
   *
   * @tags team_widgets
   * @name WidgetsDetail
   * @summary List Enabled Team Widgets
   * @request GET:/team/{id}/widgets
   * @secure
   */
  widgetsDetail = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessArrayServicesTeamWidgetConfig,
      ControllersUnauthorizedResponse | ControllersApiErrorResponse
    >({
      path: `/team/${id}/widgets`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Owner-only. Replaces the team's widget enable/order configuration.
   *
   * @tags team_widgets
   * @name WidgetsUpdate
   * @summary Set Team Widgets
   * @request PUT:/team/{id}/widgets
   * @secure
   */
  widgetsUpdate = (id: number, payload: DtoTeamWidgetForm[], params: RequestParams = {}) =>
    this.request<ControllersApiSuccessNoData, ControllersUnauthorizedResponse | ControllersApiErrorResponse>({
      path: `/team/${id}/widgets`,
      method: "PUT",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Computes a single widget's value for a team over the given period.
   *
   * @tags team_widgets
   * @name WidgetsDetail2
   * @summary Get Team Widget Value
   * @request GET:/team/{id}/widgets/{key}
   * @originalName widgetsDetail
   * @duplicate
   * @secure
   */
  widgetsDetail2 = (
    id: number,
    key: string,
    query?: {
      /**
       * today|yesterday|7days|14days|30days|custom
       * @default "30days"
       */
      period?: string;
      /** custom window start (unix ms) */
      from?: number;
      /** custom window end (unix ms) */
      to?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ControllersApiSuccessServicesWidgetValue,
      ControllersUnauthorizedResponse | ControllersApiErrorResponse
    >({
      path: `/team/${id}/widgets/${key}`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
