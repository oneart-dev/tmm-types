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
  ControllersMentorGroupResponse,
  ControllersMentorGroupsActiveResponse,
  ControllersMentorListResponse,
  ControllersMentorResponse,
  ControllersUnauthorizedResponse,
  DtoMentorGroupForm,
  DtoMentorGroupJoinRequestForm,
  DtoMentorNoteUpdateForm,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class MentorGroup<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Creates a new mentorship group.
   *
   * @tags mentor-group
   * @name MentorGroupUpdate
   * @summary Create Mentorship Group
   * @request PUT:/mentor-group
   * @secure
   */
  mentorGroupUpdate = (payload: DtoMentorGroupForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/mentor-group`,
        method: "PUT",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Retrieves a comprehensive list of mentor groups, including those owned by the user, joined by the user, and public groups.
   *
   * @tags mentor-group
   * @name MentorGroupList
   * @summary List Mentor Groups
   * @request GET:/mentor-group/
   * @secure
   */
  mentorGroupList = (
    query?: {
      /** Language */
      language?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersMentorListResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/mentor-group/`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Retrieves a list of mentor groups that have accepted students.
   *
   * @tags mentor-group
   * @name ActiveList
   * @summary List Active Mentor Groups
   * @request GET:/mentor-group/active
   * @secure
   */
  activeList = (params: RequestParams = {}) =>
    this.request<
      ControllersMentorGroupsActiveResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/mentor-group/active`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves group details if the provided invite code is valid.
   *
   * @tags mentor-group
   * @name InviteDetail
   * @summary Get Group by Invite Code
   * @request GET:/mentor-group/invite/{invite}
   * @secure
   */
  inviteDetail = (invite: string, params: RequestParams = {}) =>
    this.request<ControllersMentorResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/mentor-group/invite/${invite}`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Marks all mentor notes for a specific trade as read. This action is available only to students.
   *
   * @tags mentor-group
   * @name NoteReadCreate
   * @summary Mark Mentor Notes as Read
   * @request POST:/mentor-group/note/read/{trade_id}
   * @secure
   */
  noteReadCreate = (tradeId: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/mentor-group/note/read/${tradeId}`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Creates a note for a specific trade. This action is available only to mentors.
   *
   * @tags mentor-group
   * @name NoteCreate
   * @summary Create Mentor Note for a Trade
   * @request POST:/mentor-group/note/{user_id}/{trade_id}
   * @secure
   */
  noteCreate = (userId: number, tradeId: number, payload: DtoMentorNoteUpdateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/mentor-group/note/${userId}/${tradeId}`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Retrieves the details of a mentorship group. This action is available to the group owner only.
   *
   * @tags mentor-group
   * @name MentorGroupDetail
   * @summary Get Mentorship Group by ID
   * @request GET:/mentor-group/{id}
   * @secure
   */
  mentorGroupDetail = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersMentorGroupResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/mentor-group/${id}`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Updates the details of a mentorship group.
   *
   * @tags mentor-group
   * @name MentorGroupCreate
   * @summary Update Mentorship Group
   * @request POST:/mentor-group/{id}
   * @secure
   */
  mentorGroupCreate = (id: number, payload: DtoMentorGroupForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/mentor-group/${id}`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Deletes a mentorship group.
   *
   * @tags mentor-group
   * @name MentorGroupDelete
   * @summary Delete Mentorship Group
   * @request DELETE:/mentor-group/{id}
   * @secure
   */
  mentorGroupDelete = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/mentor-group/${id}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Allows a user to leave a mentorship group at any time.
   *
   * @tags mentor-group
   * @name ExitCreate
   * @summary Exit Mentorship Group
   * @request POST:/mentor-group/{id}/exit
   * @secure
   */
  exitCreate = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/mentor-group/${id}/exit`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Submits a request to join a mentorship group. An invite code is required for private groups. All requests are held in a pending state until approved or rejected by the group owner.
   *
   * @tags mentor-group
   * @name JoinUpdate
   * @summary Request to Join Mentorship Group
   * @request PUT:/mentor-group/{id}/join
   * @secure
   */
  joinUpdate = (id: number, payload: DtoMentorGroupJoinRequestForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/mentor-group/${id}/join`,
        method: "PUT",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Allows a mentor or sub-mentor to accept or decline a student's request to join a group. The student will receive an email notification upon acceptance or rejection.
   *
   * @tags mentor-group
   * @name MentorGroupCreate2
   * @summary Set Join Request Status
   * @request POST:/mentor-group/{id}/{status}/{user_id}
   * @originalName mentorGroupCreate
   * @duplicate
   * @secure
   */
  mentorGroupCreate2 = (id: number, status: string, userId: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/mentor-group/${id}/${status}/${userId}`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
}
