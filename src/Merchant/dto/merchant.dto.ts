export interface merchantDTO{
    userName:string;
    email:string;
    phone:number;
    website:string;
    contactName:string;
    contactPhone:number;
    contactEmail:string;
    notes:string;
    type:string;
    categories:string[];
    commissionPercentange:number;
    activeform:Date;
    criticalAccount:boolean;
    paymentOptions:string[];
    archived:Boolean;
}