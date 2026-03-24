import { PREFIX_INVENTORY } from "constants/endpoints";
import axiosClient from "services/axiosClient"
import type { 
    InvetoryDetailTypes,
     INVETORYTYPES,
     ItemIDType,
     UpdateInvetoryType
} from "types/inventory";


export const inventoryApi = {

    async getInventory(){
        return await axiosClient.get(PREFIX_INVENTORY);
    },
    async getItemDetails(id : ItemIDType ){
        return await axiosClient.get<InvetoryDetailTypes>(PREFIX_INVENTORY + `/${id}`);
    },
    async deleteExistingItem(id : ItemIDType){
        return await axiosClient.delete(PREFIX_INVENTORY + `/${id}`);
    },
    async updateInventoryItem({ formData , id } : UpdateInvetoryType){
        const response = await axiosClient.put(PREFIX_INVENTORY + `/${id}`, formData);
        if(!response){
            return alert(response);
        }
        return response;
    },
    async createNewItem({ formData  } : INVETORYTYPES){
        if(!formData){
            return console.warn('Missing payload');
        }
        const response =  await axiosClient.post(PREFIX_INVENTORY,formData);
        if(!response){
            return alert(response)
        }
        return response;
    }


}