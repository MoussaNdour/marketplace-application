import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import {connect} from "../services/api";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [globalError, setGlobalError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        // Reset errors
        setUsernameError("");
        setPasswordError("");
        setGlobalError("");

        // Simple validation
        if (username.length === 0) {
            setUsernameError("The username must be entered");
            return;
        }
        if (password.length === 0) {
            setPasswordError("The password must be entered");
            return;
        }


        const result = await connect({email:username,password:password})
        if(result.success){
            if(result.data?.token){
                localStorage.setItem("token",result.data.token);
                console.log("Token:"+result.data.token)
                navigate("/")
            }

        }
        else{
            if(result.error)
                setGlobalError(result.error)
        }
    };

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 ">
            <form className="flex flex-col gap-[15px] bg-slate-100 p-[50px] rounded"
                  onSubmit={handleSubmit}>

                <div className="w-full flex flex-row justify-between">
                    <label>Username:</label>
                    <input
                        className="border w-[200px] h-[30px] rounded"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                {usernameError && <p className="text-red-500">{usernameError}</p>}

                <div className="w-full flex flex-row justify-between">
                    <label>Password:</label>
                    <input
                        className="border w-[200px] h-[30px] rounded"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {passwordError && <p className="text-red-500">{passwordError}</p>}

                <button className="bg-sky-500 text-white rounded p-[5px] w-full" type="submit">
                    Connect
                </button>
                <p>Not Account ? <Link className="text-sky-500" to="/register">register now</Link></p>

                {globalError && <p className="text-red-500">{globalError}</p>}
            </form>
        </div>
    );
};

export default Login;
