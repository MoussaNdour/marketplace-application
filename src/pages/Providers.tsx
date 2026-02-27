import {useEffect, useState} from "react";
import {Provider} from "../types";
import { getAllProviders } from "../services/api";
import ProviderCard from "../components/ProviderCard";
import { Box, Typography } from "@mui/material";


const Providers = () => {

    const [providers, setProviders] = useState<Array<Provider>>()

    useEffect(() => {
        const fetchProviders = async () =>{
            const response= await getAllProviders()
            setProviders(response)
        }

        fetchProviders()
    }, []);

    return(
        <Box p={2}>
            <Typography variant="h4" textAlign={"center"} gutterBottom>Here are our providers</Typography>
            <div className="grid grid-cols-3 place-items-center gap-y-12.5">
                {
                    providers?.map((provider)=>{
                        return <ProviderCard key={provider.id} provider={provider} />
                    })
                }
            </div>

        </Box>
    )
}

export default Providers;