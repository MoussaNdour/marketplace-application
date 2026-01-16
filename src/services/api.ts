import axios from 'axios';
import {ApiResponse, ApiResult, Login, Service, User, Provider} from "../types";


export const connect = async (login:Login):Promise<ApiResult<any>> =>{
    try {
        const response = await fetch("http://localhost:8080/api/auth/connect", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: login.email,
                password: login.password
            }),
        });

        // Vérifier statut de la réponse
        if (!response.ok) {
            return {success:false,error:"Email or password incorrect"};
        }
        else{
            let loginResponse: ApiResult<ApiResponse> = {
                success: true,
                data: await response.json()
            };

            return loginResponse;
        }

    } catch (e) {
        return {success:false,error:"error network"};
    }
}

export const register = async (user: User): Promise<ApiResult<any>> => {
    try {
        const response = await axios.post(
            "http://localhost:8080/api/auth/register",
            user
        );


        return {
            success: true,
            data: response.data
        };

    } catch (error: any) {
        console.error(error);
        return {
            success: false,
            error: error.response.data.error
        };
    }
};

export const getAllServices = async ():Promise<Array<Service>> =>{

    try{
        const response= await axios.get("http://localhost:8080/api/service")

        return response.data;
    }
    catch (e){
        console.error("API error:", e);
        throw e;
    }

}

export const getAllServicesProposals= async ():Promise<any> => {

    try{
        const response=axios.get("http://localhost:8080/api/service-proposal")
    }
    catch (e) {
        
    }
    
}

export const getServiceById = async (id:number)=>{
    axios.get(`http://localhost:8080/api/service/${id}`)
        .then(function (response){
            console.log(response)
        })
        .catch(function (error){
            console.error(error)
        })
}

export const getServicesProposalByProvider= async () => {

    axios.get("http://localhost:8080/api/service-proposal/provider",
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
        const response= await axios.get<Provider[]>(`http://localhost:8080/api/service/${idservice}/providers`)

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
        const providers= await axios.get("http://localhost:8080/api/providers")

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