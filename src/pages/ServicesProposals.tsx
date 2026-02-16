import {useEffect, useState} from "react";
import { getAllServicesProposals } from "../services/api";
import { ServiceProposal } from "../types";
import ServiceProposalPreview from "../components/ServiceProposalPreview";

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
        <div className="flex flex-wrap justify-center gap-8">
            {
                serviceproposals?.map((serviceproposal)=>{
                    return <ServiceProposalPreview key={serviceproposal.id} service={serviceproposal}/>
                })
            }
        </div>
    )
}

export default ServicesProposals;