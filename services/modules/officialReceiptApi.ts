import axiosClient from "services/axiosClient";
import { 
    PREFIX_CREATE_NEW_ORNO,
    PREFIX_GET_ORNO
} from "constants/endpoints";


export const officialReceiptApi = {
    async getOrNo(){
        return await axiosClient.get(PREFIX_GET_ORNO);
    },
    async createNewOrNo(){
        return await axiosClient.get(PREFIX_CREATE_NEW_ORNO);
    }
}