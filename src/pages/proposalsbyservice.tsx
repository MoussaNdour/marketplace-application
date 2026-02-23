import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ServiceProposal } from '../types';
import { getProposalsByService } from '../services/api';
import ServiceProposalPreview from '../components/ServiceProposalPreview';
import { Typography } from '@mui/material';

const ProposalsByService = () => {

  const { id } = useParams();
  const [proposals,setProposals] = useState<Array<ServiceProposal>>()

  useEffect(()=>{
    const getProposals = async () =>{
      if(id){
        const response = await getProposalsByService(parseInt(id));

        setProposals(response)

        console.log(response);
      }
    }

    getProposals()
  },[id])

  return (
    <div>
      <p className='text-3xl text-center m-4'>You're going to see here the proposals for the service that have id:{id}</p>
      <div className='flex flex-wrap justify-center gap-8'>
        {
          proposals?.map((serviceproposal)=>{
              return <ServiceProposalPreview key={serviceproposal.id} service={serviceproposal}/>
          })
        }
      </div>
    </div>
  )
}

export default ProposalsByService
