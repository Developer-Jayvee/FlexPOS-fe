
export type OrderItemsType = {
    id: number;
    qty:number;
}
export type OrderDetails = {
    ORNo : string;
    customer_name:string,
    total_qty : number;
    grand_total: number;
    process_by:number;
}
export type SaleTypes = {
    orders: OrderItemsType;
    details : OrderDetails;
}