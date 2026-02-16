import {Provider} from "../types"
import profile from "../assets/profile.jpg"
import {Link} from "react-router-dom";
import { Button } from "@mui/material";

type Props = {
    provider:Provider;
}

const ProviderCard = ({provider}:Props) => {


    return(
        <div className="rounded-[10px] w-[300px] h-[250px] bg-sky-500">
            <div className="flex flex-col justify-center mt-[15px]">
                <div className="rounded-full w-[70px] h-[70px] m-auto"  style={{ backgroundImage:`url(${profile})`, backgroundSize: "cover" }}></div>
                <h1 className={"text-white text-center"}>{provider.firstname}  {provider.lastname}</h1>
            </div>
            <div className={"mx-2.5 text-white text-justify"}>
                <p className={"text-sm"}>
                    _I'm frontend developer with 3 years of experience. I build nice UI using technologies like react and tailwind css
                </p>
                <h2>
                    _Level:{provider.level}
                </h2>
                <h2>
                    _{provider.yearsOfExperience} year(s) of experience
                </h2>
            </div>
            <div className={"flex justify-center mt-2.5"}>
                <Link to={"/askService"} className={""}><Button variant="contained">See Profile</Button></Link>
            </div>
        </div>
    )
}

export default ProviderCard;