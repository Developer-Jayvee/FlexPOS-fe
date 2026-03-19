import { PREFIX_SALES } from "constants/endpoints";
import axiosClient from "services/axiosClient";
import type { SaleTypes } from "types/sales";


export const salesApi = {
    async processOrder({ orders , details } : SaleTypes){
        const response = await axiosClient.post(PREFIX_SALES, { orders : orders , details :details});
        if(!response){
            return alert(response);
        }
        return response;
    }
}