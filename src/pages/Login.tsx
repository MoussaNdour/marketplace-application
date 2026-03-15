import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import {connect} from "../services/api";
import { TextField, Button, Typography, Stack, Box, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { isProvider } from "../services/auth";

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

            if(isProvider())
            {
                navigate("/provider/dashboard/overview")
            }
            else{
                navigate("/")
            }
            
        }
        catch(e:any){
            setErrorMessage(e.response?.data  || "An unknow error happened")
        }
        
    };

    return (
        <Box component={"main"} sx={{display:"flex", justifyContent:"center", alignItems:"center", minHeight: "100vh", width:"100%", bgcolor:"primary.light"}}>
            <Paper sx={{width:500, p:8}}>
                <Typography className="mb-5" variant="h6" textAlign={"center"} gutterBottom>Login</Typography>
                <form  onSubmit={handleSubmit(handleFormSubmit)} noValidate>
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
                        <Link to={"/register"}><Typography variant="body1" color="primary.light" textAlign={"end"}>No Account ? register</Typography></Link>
                        <Button type="submit" variant="contained" color="primary">{isSubmitting ? "Connecting..." : "Connect"}</Button>

                    </Stack>
                </form>
            </Paper>
        </Box>
    );
};

export default Login;
