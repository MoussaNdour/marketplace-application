import {Link} from "react-router-dom";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";




const ServiceCard = ({ service }: {service:any}) => {
    return (
        <Card className="w-100">
            <CardContent>
                <CardMedia className="relative"  sx={{ height: 200 }} image="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80" >
                    <p className="absolute text-[10px] bg-white p-[5px] rounded-[20px] top-2 right-2">{service.category}</p>
                </CardMedia>
                <CardContent>
                    <Typography variant="h6" className="text-center" gutterBottom>{service.name}</Typography>
                    <Typography variant="body1" gutterBottom className="">{service.description}</Typography>
                    <CardActions className="">
                        <Button href={`/services/${service.id}/providers`} size="small">See providers</Button>
                        <Button href={`/services/${service.id}/proposals`} size="small">See proposals</Button>
                    </CardActions>
                </CardContent>
                
            </CardContent>
            

        </Card>
    );
};

export default ServiceCard;
