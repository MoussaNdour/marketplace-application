
import {useForm} from 'react-hook-form';
import React, {useState} from 'react';
// import { registerUser } from '../services/api';
import { Client, Provider, User } from '../types';

type FormValues={
    firstname:string;
    lastname:string;
    email:string;
    role:string;
    profession:string;
    password:string;
    confirmPassword:string;
}



const Register = () => {
    const form = useForm<FormValues>()
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;
    

    const onSubmit = (data:FormValues)=>{
        console.log(data);
        if(data.password!==data.confirmPassword)
        {
            console.log("le mot de passe n'a pas ete bien confirmer")
        }
        
    }

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10" >
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center items-center" noValidate>

                <h1 className="text-3xl text-center">Registration Form</h1>

                <div className="w-full m-[10px] flex flex-col">
                    <label className="=">Firstname</label>
                    <input type="text" className="border rounded min-h-[40px] w-auto" {...register("firstname", {
                        required:{
                            value:true,
                            message:"Firstname is required"
                        }
                    })}/>
                    <p className="text-red-500">{errors.firstname?.message}</p>
                </div>

                <div className="w-full m-[10px] flex flex-col">
                    <label className="">Lastname</label>
                    <input type="text" className="border rounded min-h-[40px]" {...register("lastname",{
                        required:{
                            value:true,
                            message:"Lastname is required"
                        }
                    })}/>
                    <p className='text-red-500'>{errors.lastname?.message}</p>
                </div>

                <div className="w-full m-[10px] flex flex-col">
                    <label className="">Email</label>
                    <input type="email" className="border rounded min-h-[40px]" {...register("email",{
                        pattern:{
                            value:/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                            message:"This email is not valid"
                        },
                        validate:(value)=>{
                            return (
                                value!=="mndour428@gmail.com" ||
                                "This email is not allowed"
                            )
                        }
                    })}/>
                    <p className='text-red-500'>{errors.email?.message}</p>
                </div>

                <div className="w-full m-[10px] flex flex-col">
                    <label className="m">Register as:</label>
                    <select className="border rounded min-h-[40px]" {...register("role",{
                        required:{
                            value:true,
                            message:"Role is required"
                        }
                    })}>
                        <option value="CLIENT">Client</option>
                        <option value="PROVIDER">Provider</option>
                    </select>
                    <p className='text-red-500'>{errors.role?.message}</p>
                </div>

                <div className="w-full m-[10px] flex flex-col">
                    <label>Profession</label>
                    <input type="text" className="border rounded min-h-10" {...register("profession",{
                        required:{
                            value:true,
                            message:"profession is required"
                        }
                    })}/>
                    <p className='text-red-500'>{errors.profession?.message}</p>
                </div>

                <div className="w-full m-[10px] flex flex-col">
                    <label className="">Password</label>
                    <input type="password" className="border rounded min-h-[40px]" {...register("password",{
                        required:{
                            value:true,
                            message:"password is required"
                        }
                    })}/>
                    <p className='text-red-500'>{errors.password?.message}</p>
                </div>

                <div className="w-full m-[10px] flex flex-col">
                    <label className="">Confirm Password</label>
                    <input type="password" className="border rounded min-h-[40px]" {...register("confirmPassword",{
                        required:{
                            value:true,
                            message:"You have to confirm the password"
                        }
                    })}/>
                    <p className='text-red-500'>{errors.confirmPassword?.message}</p>
                </div>

                <div className="w-full m-[10px] flex flex-col justify-center">
                    <button type="submit" className="bg-sky-500 text-white rounded p-[5px] w-full">Submit</button>
                </div>
                <div>
                    
                </div>
            </form>
        </div>
    );
};

export default Register;
