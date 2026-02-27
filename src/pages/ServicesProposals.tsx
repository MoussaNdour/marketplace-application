import {useEffect, useState} from "react";
import { getAllServicesProposals } from "../services/api";
import { ServiceProposal } from "../types";
import ServiceProposalPreview from "../components/ServiceProposalPreview";
import { Box, Grid, Typography } from "@mui/material";

const ServicesProposals = () => {

    const [serviceproposals,setServiceproposals]=useState<Array<ServiceProposal>>()

    useEffect(() => {
        const fetchServiceProposals = async ()=>{
            const response=await getAllServicesProposals();
            console.log(response)
            setServiceproposals(response)
            
        }

        fetchServiceProposals()
    }, []);


    return(
        <Box p={4}>
            <Typography variant="h4" textAlign={"center"} gutterBottom>Here are all services proposals</Typography>
            <Grid container spacing={6} justifyContent={"center"}>
                {
                    serviceproposals?.map((serviceproposal)=>{
                        return <Grid key={serviceproposal.id} size={{xs:12, sm:6,md:4}}><ServiceProposalPreview service={serviceproposal}/></Grid>
                    })
                }
            </Grid>
            
        </Box>
    )
}

export default ServicesProposals;