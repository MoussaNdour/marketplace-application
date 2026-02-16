import {Link} from "react-router-dom";
import {Button} from "@mui/material";




const ServiceCard = ({ service }: {service:any}) => {
    return (
        <div className="rounded">
            <div className="relative h-[120px] lg:h-[220px] w-[199px] lg:w-[399px] rounded" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80)`, backgroundSize : 'cover' }}>
                <p className="absolute text-[10px] bg-white p-[5px] rounded-[20px] top-2 right-2">{service.category}</p>
            </div>
            <div className="flex flex-col h-[120px] lg:h-[110px] w-[199px] lg:w-[399px] bg-white p-2.5 border-[0.5px] gap-y-[3px] lg:gap-y-5 rounded">
                <h2 className="text-sm">{service.name}</h2>
                {/* <p className="text-[10px] lg:text-sm text-slate-400">{service.description}</p> */}
                <div className="lg:flex justify-center gap-5">
                    <Link to={"/service/" + service.id+"/providers"} className=""><Button variant="contained" size="medium">See providers</Button></Link>
                    <Link to="/" className=""><Button variant="contained" size="medium">See proposals</Button></Link>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;
