import {Provider} from "../types"
import profile from "../assets/profile.jpg"
import { Button, Card, CardContent, Typography } from "@mui/material";

type Props = {
    provider:Provider;
}

const ProviderCard = ({provider}:Props) => {


    return(
        <Card variant="outlined" className="w-100">
            <CardContent>
                <div className="flex flex-col justify-center mt-3.75">
                    <div className="rounded-full w-20.5 h-20.5 m-auto"  style={{ backgroundImage:`url(${profile})`, backgroundSize: "cover" }}></div>
                    <Typography variant="h5" component={"h1"}  className={"text-center"}>{provider.firstname}  {provider.lastname}</Typography>
                </div>
                <div className={"mx-2.5 text-justify"}>
                    <Typography variant="body1" className={"text-sm"}>
                        _{provider.description}
                    </Typography>
                    <Typography variant="h6">
                        _Level:{provider.level}
                    </Typography>
                    <Typography variant="h6">
                        _{provider.yearsOfExperience} year(s) of experience
                    </Typography>
                </div>
                <div className={"flex justify-center mt-2.5"}>
                    <Button fullWidth variant="contained" href="#">See Profile</Button>
                </div> 
            </CardContent>
            
        </Card>
    )
}

export default ProviderCard;