
import {jwtDecode} from "jwt-decode";

export function isAuth():boolean {

    let token:string | null;

    token=localStorage.getItem("token");

    return !isTokenExpired(token);
}

export function isTokenExpired(token: string | null):boolean {

    if(token===null)
    {
        localStorage.clear()
        console.log("no token founded")
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