import {useEffect, useState} from "react";
import { getAllServicesProposals } from "../services/api";
import { ServiceProposal } from "../types";

const ServicesProposals = () => {

    const [serviceproposals,setServiceproposals]=useState<Array<ServiceProposal>>()

    useEffect(() => {
        const fetchServiceProposals = async ()=>{
            const response=await getAllServicesProposals();
            console.log(response)
            setServiceproposals(response)
            
        }

        fetchServiceProposals()
    }, []);


    return(
        <div className="">
            {
                serviceproposals?.map((serviceproposal)=>{
                    return <p key={serviceproposal.id}>{serviceproposal.serviceName}</p>
                })
            }
        </div>
    )
}

export default ServicesProposals;