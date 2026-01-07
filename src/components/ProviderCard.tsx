import React from "react";
import {Provider} from "../types"
import profile from "../assets/profile.jpg"
import {Link} from "react-router-dom";

type Props = {
    provider:Provider;
}

const ProviderCard = ({provider}:Props) => {


    return(
        <div className="rounded-[10px] w-[300px] h-[250px] bg-sky-500">
            <div className="flex flex-col justify-center mt-[15px]">
                <div className="rounded-full w-[70px] h-[70px] m-auto"  style={{ backgroundImage:`url(${profile})`, backgroundSize: "cover" }}></div>
                <h1 className={"text-white text-center"}>Modou Ndiaye</h1>
            </div>
            <div className={"mx-[10px] text-white text-justify"}>
                <p className={"text-sm"}>
                    _I'm frontend developer with 3 years of experience. I build nice UI using technologies like react and tailwind css
                </p>
                <h2>
                    _Level:Medium
                </h2>
                <h2>
                    _3 years of experience
                </h2>
            </div>
            <div className={"flex justify-center mt-[10px]"}>
                <Link to={"/"} className={"bg-amber-400 rounded-[10px] text-white p-[10px] hover:text-white/80"}>Ask Service</Link>
            </div>
        </div>
    )
}

export default ProviderCard;