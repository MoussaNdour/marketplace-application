import { Button, Paper } from "@mui/material";
import { Service, ServiceProposal } from "../types";

type PropsType={
    service:ServiceProposal
}

const ServicerPreview = ({service}:PropsType) => {
  return (
    <Paper sx={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
        <div className="relative h-30 lg:h-55 w-49.75 lg:w-99.75 rounded" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80)`, backgroundSize : 'cover' }}>
            <p className="absolute text-[10px] bg-white p-1.25 rounded-[20px] top-2 right-2">{service.serviceCategory}</p>
        </div>
        <div className="flex flex-col h-30 lg:h-55 w-49.75 lg:w-99.75 bg-white p-2.5 border-[0.5px] gap-y-0.75 lg:gap-y-5 rounded">
            <h2 className="text-sm">{service.serviceName}</h2>
            <p className="text-[10px] lg:text-sm text-slate-400">{service.description}</p>
            <div className="flex justify-between">
                <div>
                    <div>
                        <p className="tex-sm">{service.providerFirstName} {service.providerLastName} </p>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <p className="text-sm">Price:</p>
                    <p className="text-sm text-blue-400 font-bold">{service.price}€</p>
                </div>
            </div>
            <Button variant="contained">Ask this service</Button>
        </div>
    </Paper>
  );
};

export default ServicerPreview;
