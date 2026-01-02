import axios from 'axios';


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

        console.log(response.data);

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


export const getAllServices = async ()=>{
    axios.get("http://localhost:8080/api/service")
        .then(function (response){
            console.log(response)
        })
        .catch(function (error){
            console.error("API error:", error);
            throw error;
        })
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


