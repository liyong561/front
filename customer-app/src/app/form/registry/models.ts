export interface FanMatiral{
    num:string;
    room?:number;
    hub?:number;
    blade?:number;
    generator?:number;
};
export interface DeliveryProgress{
    seat:string;
    fanWorkOrder:string;
    fanDelivery:string;
};

export interface PersonHour{
    empCode:string;
    empName:string;
    phone:string;
    entryName:string;
    startTime:Date;
    endTime:Date;
    days:number;
    createUser:string;
    createTime:Date;
}