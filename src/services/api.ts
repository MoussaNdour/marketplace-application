import axios, {AxiosInstance,AxiosRequestConfig} from 'axios';
import {Login, Service, User, Provider, ServiceProposal, LoginResponse} from "../types";


const axiosConfig:AxiosRequestConfig = {
    baseURL: 'http://localhost:8080/api',
    timeout: 10000,
    headers : {
        'Content-type' : 'application/json'
    }
}

const axiosClient:AxiosInstance=axios.create(axiosConfig);

export const connect = async (login:Login):Promise<LoginResponse> =>{
    try{
        const response=await axiosClient.post("/auth/connect");
        return response.data;
    }
    catch(e){
        throw e;
    }
}

export const registerUser = async (user: User): Promise<User> => {
    try {
        const response = await axiosClient.post(
            "/auth/register",
            user
        );

        return response.data;

    } catch (error: any) {
        throw error;
    }
};

export const getAllServices = async ():Promise<Array<Service>> =>{

    try{
        const response= await axiosClient.get("/service")

        return response.data;
    }
    catch (e){
        console.error("API error:", e);
        throw e;
    }

}

export const getAllServicesProposals= async ():Promise<Array<ServiceProposal>> => {

    try{
        const response=await axiosClient.get("/service-proposal")
        return response.data;
    }
    catch (e) {
        if (axios.isAxiosError(e)) {
            console.error(e.response?.data)
        } else {
            console.error(e)
        }
        throw e
    }
    
}

export const getServiceById = async (id:number)=>{
    axiosClient.get(`/service/${id}`)
        .then(function (response){
            console.log(response)
        })
        .catch(function (error){
            console.error(error)
        })
}

export const getServicesProposalByProvider= async () => {

    axiosClient.get("/service-proposal/provider",
        {
            params:{
                providerId:1
            }
        })
        .then(function(response){
            console.log(response.data)
        })
        .catch(function (error){
            console.error(error)
            throw error
        })

}

export const getProviderByService = async (idservice:number):Promise<Array<Provider>> =>{
    try{
        const response= await axiosClient.get<Provider[]>(`/service/${idservice}/providers`)

        return response.data
    }
    catch(e){
        if (axios.isAxiosError(e)) {
            console.error(e.response?.data)
        } else {
            console.error(e)
        }
        throw e
    }
}

export const getAllProviders = async ():Promise<Array<Provider>> =>{

    try{
        const providers= await axiosClient.get("/provider")

        return providers.data
    }
    catch (e) {
        if (axios.isAxiosError(e)) {
            console.error(e.response?.data)
        } else {
            console.error(e)
        }
        throw e
    }
}