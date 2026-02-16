import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import {connect} from "../services/api";
import { TextField, Button, Typography, Stack } from "@mui/material";
import { useForm } from "react-hook-form";

const Login = () => {

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("")

    const defaultValues={
        email:"",
        password:""
    }

    const form = useForm({
        defaultValues:defaultValues
    })
    const { handleSubmit, formState, register } = form
    const { isSubmitting, errors } = formState

    const handleFormSubmit = async (data:typeof defaultValues) => {
        setErrorMessage("")
        try{
            const response = await connect(data);
            localStorage.setItem("token",response.token)
            localStorage.setItem("refreshToken", response.refreshToken)
            localStorage.setItem("profile",JSON.stringify(response.profile))

            navigate("/")
        }
        catch(e:any){
            setErrorMessage(e.response?.data  || "Une erreur est survenue")
        }
        
    };

    return (
        <div className="flex flex-col items-center p-5 justify-center">
            <Typography className="mb-5" variant="h4">Login</Typography>
            <form className="max-w-[400px]" onSubmit={handleSubmit(handleFormSubmit)} noValidate>
                <Stack spacing={4}>
                    <TextField label="Email" fullWidth {...register("email",{
                        required:{
                            value:true,
                            message:"The email is required"
                        }
                    })} error={!!errors.email} helperText={errors.email?.message} size="small"/>
                    <TextField label="Password" {...register("password",{
                        required:{
                            value:true,
                            message:"The password is required"
                        }
                    })} error={!!errors.password} helperText={errors.password?.message} type="password" size="small" fullWidth/>
                    { errorMessage && <p className="text-red-500">{errorMessage}</p> }
                    <Button type="submit" variant="contained" color="primary">{isSubmitting ? "Connecting..." : "Connect"}</Button>

                </Stack>
            </form>
        </div>
    );
};

export default Login;
