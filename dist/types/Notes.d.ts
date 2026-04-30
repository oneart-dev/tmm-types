import { ControllersApiErrorResponse, DtoUserNoteCreateForm, DtoUserNoteReorderForm, DtoUserNoteUpdateForm, ServicesUserNote } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Notes<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    notesList: (query?: {
        category_id?: number;
        from_date?: string;
        to_date?: string;
        tag_ids?: number[];
        q?: string;
        limit?: number;
        offset?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesUserNote[], any>>;
    notesCreate: (request: DtoUserNoteCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesUserNote, any>>;
    reorderCreate: (request: DtoUserNoteReorderForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<void, ControllersApiErrorResponse>>;
    notesDetail: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesUserNote, any>>;
    notesDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<void, any>>;
    notesPartialUpdate: (id: number, request: DtoUserNoteUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesUserNote, any>>;
    restoreCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<void, any>>;
}
//# sourceMappingURL=Notes.d.ts.map