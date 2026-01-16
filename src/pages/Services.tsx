import {useEffect, useState} from "react";
import {getAllServices} from "../services/api";
import ServiceCard from "../components/ServiceCard"
import {Service} from "../types";



const Services = () =>{

    const [services, setServices] = useState<Service[]>([]);


    useEffect(() => {
        const fetServices= async ()=>{
            const response = await getAllServices()
            setServices(response)

        }

        fetServices();
    }, []);

    return(
        <div className="m-[15px]">
            <h1 className="text-center mb-2">Here are services available</h1>
            <div className="grid gap-4 grid-cols-2 place-items-center">
                {services.map((service)=>{
                    return <ServiceCard key={service.id} service={service}/>
                })}
            </div>
        </div>
    )
}

export default Services;