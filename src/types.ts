export enum Role{ADMIN="ADMIN",PROVIDER="PROVIDER",CLIENT="CLIENT"}

export interface User
{
    readonly role?:string;
    readonly id?:number;
    firstname:string;
    lastname:string;
    email:string;
    password:string;
}

export interface Provider extends User
{
    profession:string;
}

export interface Client extends User
{
    profession?:string;
}

export interface Login
{
    email:string;
    password:string;
}

export interface ApiResponse
{
    readonly token?:string;
    user?:User;
}


export type ApiResult<T> = {
    success: boolean;
    data?: T;
    error?: string;
};

export interface Service {
    id: number;
    name: string;
    createdAt: string | null;
    category: string;
    description: string | null;
    mark: number;
    imagePath:string | null;
}
