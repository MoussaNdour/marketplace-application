import axios, {AxiosInstance,AxiosRequestConfig} from 'axios';
import {Login, Service, User, Provider, ServiceProposal, LoginResponse, UserDisconnectedError} from "../types";
import { getToken, isTokenExpired } from './auth';


const axiosConfig:AxiosRequestConfig = {
    baseURL: 'http://localhost:8080/api',
    timeout: 10000,
    headers : {
        'Content-type' : 'application/json',
        'Accept': 'application/json',
    }
}

const axiosClient:AxiosInstance=axios.create(axiosConfig);

// axiosClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');

//     // Vérification : si l'URL ne contient pas "/api/public/" et qu'on a un token
//     if (!config.url!.includes('/api/public/') && token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // Si l'erreur est 401 et que ce n'est pas déjà une tentative de rafraîchissement
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = localStorage.getItem('refreshToken');

//       if (refreshToken) {
//         try {
//           // Appel à votre endpoint de refresh (souvent public)
//           const res = await axios.post('http://localhost:8080/api/auth/refres', {
//             refreshToken: refreshToken
//           });

//           const newToken = res.data.accessToken;
//           localStorage.setItem('token', newToken);

//           // On met à jour le header de la requête initiale et on la rejoue
//           originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
//           return axiosClient(originalRequest);
//         } catch (refreshError) {
//           // Si le refresh échoue aussi (ex: refreshToken expiré), on déconnecte
//           localStorage.clear();
//           window.location.href = '/login';
//         }
//       }
//     }
//     return Promise.reject(error);
//   }
// );



export const connect = async (login:Login):Promise<LoginResponse> =>{
    localStorage.removeItem("token")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("profile")


    try{
        const response=await axiosClient.post("/public/auth/connect",login);
        return response.data;
    }
    catch(e){
        throw e;
    }
}

export const registerUser = async (user: User): Promise<LoginResponse> => {
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
        const response= await axiosClient.get("/public/services")

        return response.data;
    }
    catch (e){
        console.error("API error:", e);
        throw e;
    }

}

export const getAllServicesProposals= async ():Promise<Array<ServiceProposal>> => {

    try{
        const response=await axiosClient.get("/public/service-proposals")
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


export const getProvidersByService = async (idservice:number):Promise<Array<Provider>> =>{
    try{
        const response= await axiosClient.get<Provider[]>(`/public/services/${idservice}/providers`)

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

export const getProposalsByService = async (idservice:number):Promise<Array<ServiceProposal>> =>{

    try{
        const response = await axiosClient.get(`/public/services/${idservice}/proposals`)

        return response.data;
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
        const providers= await axiosClient.get("/public/providers")

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

export const refreshTokenRequest = async () =>{
    const refreshToken = localStorage.getItem("refreshToken")
    if(isTokenExpired(refreshToken))
    {
        localStorage.removeItem("refreshToken")

        throw new UserDisconnectedError("User need to connect");
    }
    else{
        try{
            const response = await axiosClient.get("/auth/refreshToken",{
                headers:{
                    "Authorization": `Bearer ${refreshToken}`
                }
            })

            localStorage.setItem("token",response.data)
        }
        catch(e:any){
            if (e.response?.status === 401 || e.response?.status === 403) {
                localStorage.removeItem("token");
                localStorage.removeItem("refreshToken");
            }
            throw e;
        }
    }
    
}


export const searchService = async (data:string):Promise<Array<Service>> => {
    try{
        const response= await axiosClient.get("/public/services",{
            params:{
                name:data,
            }
        })

        return response.data;
    }
    catch(e){
        console.error("API error:", e);
        throw e;
    }
}

export const getServicesByProvider = async (email:String): Promise<Array<Service>> => {
    
    try{
        const token = getToken() 
        const response = await axiosClient.get(`/provider/${email}/services`,
            {
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            }
        );

        
        return response.data;
    }
    catch(e:any){
        throw e;
    }
}

