
import { DeckRounded } from "@mui/icons-material";
import {jwtDecode} from "jwt-decode";
import { MyTokenPayload } from "../types";

export function isAuth():boolean {

    let token:string | null;

    token=localStorage.getItem("token");

    return !isTokenExpired(token);
}

export function isTokenExpired(token: string | null):boolean {

    if(token===null)
    {
        localStorage.removeItem("token")
        
        return true;
    }
    else{
        
        const decoded=jwtDecode(token)


        const currentTime=Math.floor(Date.now()/1000)

        if (decoded.exp && currentTime >= decoded.exp) {
            localStorage.clear()
            console.log('Token has expired.');

            return true;
        } else {

            return false;
        }
    }
}

export const isProvider = (): boolean => {

    if(isAuth()){
        const token=localStorage.getItem("token");
        const decoded = jwtDecode<MyTokenPayload>(token!);

        if(decoded.role==="PROVIDER"){
            return true;
        }
        else{
            return false;
        }
    }

    return false;
}