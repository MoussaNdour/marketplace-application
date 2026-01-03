enum Role{ADMIN="ADMIN",PROVIDER="PROVIDER",CLIENT="CLIENT"}

interface User
{
    readonly role?:string;
    readonly id?:number;
    firstname:string;
    lastname:string;
    email:string;
    password:string;
}

interface Provider extends User
{
    profession:string;
}

interface Client extends User
{
    profession?:string;
}

interface Login
{
    email:string;
    password:string;
}

interface ApiResponse
{
    readonly token?:string;
    user?:User;
}


type ApiResult<T> = {
    success: boolean;
    data?: T;
    error?: string;
};

interface Service{
    id:number;
    name:string;
    createdAt:Date;
    category:string;
    description:string;
    mark:number;
}