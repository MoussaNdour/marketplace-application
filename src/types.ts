export enum Role{ADMIN="ADMIN",PROVIDER="PROVIDER",CLIENT="CLIENT"}


export interface User
{
    readonly role?:string;
    readonly id?:number;
    firstname:string;
    lastname:string;
    email:string;
}

export interface Provider extends User
{
    profession:string;
    level:string;
    yearsOfExperience:string;
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


export type LoginResponse=
{
    token:string;
    refreshToken:string;
    profile:User;
}


export interface Service {
    id: number;
    name: string;
    createdAt: string | null;
    category: string;
    description: string | null;
    mark: number;
    imagePath:string | null;
}

export interface ServiceProposal{
    id:number;
    serviceName:string;
    providerEmail:string;
    providerFirstName:string;
    providerLastName:string;
    price:number;
    serviceCategory:string;
    description:string;
}

export class UserDisconnectedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "UserDisconnectedError";
       
        Object.setPrototypeOf(this, UserDisconnectedError.prototype);
    }
}


