import {useEffect, useState} from "react";
import {getAllServices} from "../services/api";
import ServiceCard from "../components/ServiceCard"
import {Service} from "../types";
import { Typography } from "@mui/material";



const Services = () =>{

    const [services, setServices] = useState<Service[]>([]);


    useEffect(() => {
        const fetServices= async () => {
            const response = await getAllServices()
            setServices(response)

        }

        fetServices();
    }, []);

    return(
        <div className="m-3.75">
            <Typography variant="h3" className="text-center" gutterBottom>Here are services available</Typography>
            <div className="grid gap-10 grid-cols-3 place-items-center">
                {services.map((service)=>{
                    return <ServiceCard key={service.id} service={service}/>
                })}
            </div>
        </div>
    )
}

export default Services;