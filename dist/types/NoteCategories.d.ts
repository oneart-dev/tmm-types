import { ControllersApiErrorResponse, ControllersUnauthorizedResponse, DtoNoteCategoryForm, ServicesNoteCategory } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class NoteCategories<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    noteCategoriesList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesNoteCategory[], ControllersUnauthorizedResponse>>;
    noteCategoriesCreate: (request: DtoNoteCategoryForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesNoteCategory, ControllersApiErrorResponse>>;
    noteCategoriesDelete: (id: number, query?: {
        on_children?: string;
        move_to?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<void, any>>;
    noteCategoriesPartialUpdate: (id: number, request: DtoNoteCategoryForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesNoteCategory, any>>;
}
//# sourceMappingURL=NoteCategories.d.ts.map