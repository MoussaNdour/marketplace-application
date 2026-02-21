import { Button } from "@mui/material";
import { Service, ServiceProposal } from "../types";

type PropsType={
    service:ServiceProposal
}

const ServicerPreview = ({service}:PropsType) => {
  return (
    <div className="rounded card-item">
        <div className="relative h-[120px] lg:h-[220px] w-[199px] lg:w-[399px] rounded" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80)`, backgroundSize : 'cover' }}>
            <p className="absolute text-[10px] bg-white p-[5px] rounded-[20px] top-2 right-2">{service.serviceCategory}</p>
        </div>
        <div className="flex flex-col h-[120px] lg:h-[220px] w-[199px] lg:w-[399px] bg-white p-2.5 border-[0.5px] gap-y-[3px] lg:gap-y-5 rounded">
            <h2 className="text-sm">{service.serviceName}</h2>
            <p className="text-[10px] lg:text-sm text-slate-400">{service.description}</p>
            <div className="flex justify-between">
                <div>
                    <div>
                        <p className="tex-sm">{service.providerFirstName} {service.providerLastName} </p>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <p className="text-sm">Starting at</p>
                    <p className="text-sm text-blue-400 font-bold">{service.price}</p>
                </div>
            </div>
            <Button variant="contained">Ask this service</Button>
        </div>
    </div>
  );
};

export default ServicerPreview;
