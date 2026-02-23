import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ServiceProposal } from '../types';
import { getProposalsByService } from '../services/api';

const ProposalsByService = () => {

  const { id } = useParams();
  const [proposals,setProposals] = useState<Array<ServiceProposal>>()

  useEffect(()=>{
    const getProposals = async () =>{
      if(id){
        const response = await getProposalsByService(parseInt(id));

        console.log(response);
      }
    }

    getProposals()
  },[id])

  return (
    <div>
      <p>You're going to see here the proposals for the service that have id:{id}</p>
    </div>
  )
}

export default ProposalsByService
