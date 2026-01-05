import {useEffect, useState} from "react";
import {getAllServices} from "../services/api";
import ServiceCard from "../components/ServiceCard"



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
        <div>
            <h1>Here are services available</h1>
            <div className="flex justify-center gap-4">
                {services.map((service)=>{
                    return <ServiceCard key={service.id} service={service}/>
                })}
            </div>
        </div>
    )
}

export default Services;