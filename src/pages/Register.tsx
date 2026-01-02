

import React, {useState} from 'react';
import {register} from "../services/api";

const Register = () => {
    const [firstname, setFirstname] = useState("")
    const [firstnameError, setFirstnameError] = useState("")
    const [lastname, setLastname] = useState("")
    const [lastnameError, setLastnameError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [role, setRole] = useState("CLIENT")
    const [roleError, setRoleError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const [profession, setProfession] = useState("")
    const [professionError, setProfessionError] = useState("")
    const [globalErrors, setGlobalErrors] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        setFirstnameError("")
        setLastnameError("")
        setEmailError("")
        setRoleError("")
        setProfessionError("")
        setPasswordError("")
        setConfirmPasswordError("")
        setGlobalErrors("")

        let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



        if(firstname.length===0){
            setFirstnameError("FirstName is required")
            return;
        }
        if(lastname.length===0){
            setLastnameError("Lastname is required")
            return;
        }

        if(email.length===0){
            setLastnameError("Email is required")
            return;
        }

        if(!regexEmail.test(email)){
            setEmailError("Email is invalid")
            return;
        }

        if(role.length===0){
            setRoleError("The role is required")
            return;
        }

        if(role==="PROVIDER"){
            if(profession.length===0) {
                setProfessionError("The profession is required for providers")
                return;
            }

        }
        else if(role==="CLIENT") {
            setRole("CLIENT")
        }
        else{
            setRoleError("This role is unauthorized")
            return;
        }

        let regexPassword=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}/;

        if(!regexPassword.test(password))
        {
            setPasswordError("This password is not enought strength")
            return;
        }

        if(confirmPassword.length===0){
            setConfirmPasswordError("You need to confirm the password")
            return;
        }
        if(password!=confirmPassword){
            setConfirmPasswordError("The password is not well confirmed")
            return;
        }

        let user:User;

        if(role==="CLIENT")
        {
            if(profession!="")
            {
                let client:Client;

                client={
                    role:role,
                    firstname:firstname,
                    lastname:lastname,
                    email:email,
                    password:password,
                    profession:profession
                }

                user=client;
            }
            else {
                let client:Client;
                user={
                    role:role,
                    firstname:firstname,
                    lastname:lastname,
                    email:email,
                    password:password
                }
            }
        }
        else{
            let provider:Provider;

            provider={
                role:role,
                firstname:firstname,
                lastname:lastname,
                email:email,
                password:password,
                profession:profession
            }

            user=provider;
        }

        const response = await register(user);

        if(response.success)
        {
            setGlobalErrors("User registered with success")
            setIsSuccess(true)
        }
        else{
            if(response.error)
                setGlobalErrors(response.error)
        }
    }

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10" >
            <form onSubmit={(e)=>{handleSubmit(e)}} className="w-full flex flex-col justify-center items-center">

                <h1 className="text-3xl text-center">Registration Form</h1>

                <div className="w-full m-[10px] flex flex-col">
                    <label className="=">Firstname</label>
                    <input type="text" onChange={(e)=>setFirstname(e.target.value)} className="border rounded min-h-[40px] w-auto"/>
                    { firstnameError && <p className="text-red-500">{firstnameError}</p>}
                </div>

                <div className="w-full m-[10px] flex flex-col">
                    <label className="=">Lastname</label>
                    <input type="text" onChange={(e)=>setLastname(e.target.value)} className="border rounded min-h-[40px]"/>
                    { lastnameError && <p className="text-red-500">{lastnameError}</p> }
                </div>

                <div className="w-full m-[10px] flex flex-col">
                    <label className="">Email</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} className="border rounded min-h-[40px]"/>
                    { emailError && <p id="error-message" className="text-red-500">{emailError}</p> }
                </div>

                <div className="w-full m-[10px] flex flex-col">
                    <label className="m">Register as:</label>
                    <select className="border rounded min-h-[40px]" onChange={(e)=>setRole(e.target.value)}>
                        <option value="CLIENT">Client</option>
                        <option value="PROVIDER">Provider</option>
                    </select>
                </div>

                <div className="w-full m-[10px] flex flex-col">
                    <label>Profession</label>
                    <input type="text" className="border rounded min-h-[40px]" onChange={(e)=>{setProfession(e.target.value)}}/>
                    { professionError && <p className="text-red-500">{professionError}</p> }
                </div>

                <div className="w-full m-[10px] flex flex-col">
                    <label className="">Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} className="border rounded min-h-[40px]"/>
                    { passwordError && <p className="text-red-500">{passwordError}</p> }
                </div>

                <div className="w-full m-[10px] flex flex-col">
                    <label className="">Confirm Password</label>
                    <input type="password" onChange={(e)=>{setConfirmPassword(e.target.value)}} className="border rounded min-h-[40px]"/>
                    { confirmPasswordError && <p className="text-red-500">{confirmPasswordError}</p> }
                </div>

                <div className="w-full m-[10px] flex flex-col justify-center">
                    <button type="submit" className="bg-sky-500 text-white rounded p-[5px] w-full">Submit</button>
                </div>
                <div>
                    { globalErrors && <p className={`text-sm ${isSuccess ? "text-green-500" : "text-red-500"}`}>{globalErrors}</p> }
                </div>
            </form>
        </div>
    );
};

export default Register;
