export interface User {
    id : number;
    name : string;
    address : string;
    customer : customer;
}

export interface customer {
    id : number;
    name : string
}