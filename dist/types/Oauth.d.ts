import { ControllersApiErrorResponse, ControllersApiSuccessArrayControllersOauthGrantView, ControllersApiSuccessControllersOauthAuthorizeContext, ControllersApiSuccessControllersOauthAuthorizeResult, ControllersApiSuccessNoData, ControllersApiWarningResponse, ControllersOauthAuthorizeRequest, ControllersOauthClientRegistrationResponse, ControllersOauthProtocolError, ControllersOauthTokenResponse, ControllersUnauthorizedResponse, OauthClientRegistrationRequest } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Oauth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    authorizeCreate: (body: ControllersOauthAuthorizeRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessControllersOauthAuthorizeResult, ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
    authorizeContextList: (query: {
        client_id: string;
        redirect_uri: string;
        scope?: string;
        state?: string;
        code_challenge?: string;
        code_challenge_method?: string;
        resource?: string;
        response_type?: string;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessControllersOauthAuthorizeContext, ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
    grantsList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayControllersOauthGrantView, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    grantsDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    registerCreate: (body: OauthClientRegistrationRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersOauthClientRegistrationResponse, ControllersOauthProtocolError>>;
    revokeCreate: (data: {
        token: string;
        token_type_hint?: string;
        client_id?: string;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, any>>;
    tokenCreate: (data: {
        grant_type: string;
        code?: string;
        redirect_uri?: string;
        client_id: string;
        code_verifier?: string;
        refresh_token?: string;
        resource?: string;
        client_assertion_type?: string;
        client_assertion?: string;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersOauthTokenResponse, ControllersOauthProtocolError>>;
}
//# sourceMappingURL=Oauth.d.ts.map