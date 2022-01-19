import { DataResponse } from "./DataResponse";
import { SupportResponse } from "./SupportResponse";

export interface ResponseUser {
    data: DataResponse;
    support: SupportResponse;
}