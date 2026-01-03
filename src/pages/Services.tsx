import {useEffect, useState} from "react";
import {getAllServices} from "../services/api";


const Services = () =>{

    const [services, setServices] = useState<Service[]>([]);


    useEffect(() => {
        const fetServices= async ()=>{
            const response = await getAllServices()
            setServices(response)
        }

    }, []);

    return(
        <div>
            <h1>Here are services availables</h1>
            <ul className="flex justify-center gap-4">

            </ul>
        </div>
    )
}

export default Services;