import React from "react";
import {Link} from "react-router-dom";




const ServiceCard = ({ service }: {service:any}) => {
    return (
        <div className="rounded">
            <div className="relative h-[120px] lg:h-[220px] w-[199px] lg:w-[399px] rounded" style={{ backgroundImage: `url(http://localhost:8080${service.imagePath})`, backgroundSize : 'cover' }}>
                <p className="absolute text-[10px] bg-white p-[5px] rounded-[20px] top-2 right-2">{service.category}</p>
            </div>
            <div className="flex flex-col h-[120px] lg:h-[220px] w-[199px] lg:w-[399px] bg-white p-[10px] border-[0.5px] gap-y-[3px] lg:gap-y-[20px] rounded">
                <h2 className="text-sm">{service.name}</h2>
                <p className="text-[10px] lg:text-sm text-slate-400">{service.description}</p>
                <div className="lg:flex gap-[20px]">
                    <Link to={"/service/" + service.id+"/providers"} className="text-xs text-white bg-black rounded p-[3px] hover:opacity-50">See providers for this service</Link>
                    <Link to="/" className="text-xs text-white bg-black rounded p-[3px] hover:opacity-50">See proposals for this service</Link>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;
