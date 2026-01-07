

import React from 'react';
import {useParams} from "react-router-dom";
import ProviderCard from "../components/ProviderCard";

const ProvidersByService = () => {

    const {serviceId}=useParams()


    return(
        <div className={"flex justify-center pt-[10px]"}>
           <ProviderCard/>
        </div>
    )

};

export default ProvidersByService;
