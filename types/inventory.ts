
export type ItemIDType = number;
export type InvetoryDetailTypes = {
    name:string;
    stocks:number;
    price:number;
}
export type PartialItemTypes = {
    name?:string;
    stocks?:number;
    price?:number;
}
export type INVETORYTYPES = {
    formData:InvetoryDetailTypes
}
export type UpdateInvetoryType = {
    formData : PartialItemTypes;
    id : ItemIDType
}