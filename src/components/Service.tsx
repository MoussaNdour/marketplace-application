import React from "react";



const Service =({service})=>{


    return(
        <div className="rounded">
            <div className="relative h-[120px] lg:h-[220px] w-[199px] lg:w-[399px] rounded" style={{ backgroundImage: `url(${service.image})`, backgroundSize : 'cover' }}>
                <p className="absolute text-[10px] bg-white p-[5px] rounded-[20px] top-2 right-2">{service.categorie}</p>
            </div>
            <div className="flex flex-col h-[120px] lg:h-[220px] w-[199px] lg:w-[399px] bg-white p-[10px] border-[0.5px] gap-y-[3px] lg:gap-y-[20px] rounded">
                <h2 className="text-sm">{service.name}</h2>
                <p className="text-[10px] lg:text-sm text-slate-400">{service.description}</p>
                <div className="flex justify-between">
                    <div className="flex flex-col ">
                        <p className="text-sm">Starting at</p>
                        <p className="text-sm text-blue-400 font-bold">200$</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;