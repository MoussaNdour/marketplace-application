import React from 'react';
import { ServiceProposal } from '../types';

type PropsTypes={
    serviceproposal:ServiceProposal
}

const ServiceProposalCard = ({serviceproposal}:PropsTypes) => {
  return (
    <div>
        <p>{serviceproposal.serviceName}</p>
    </div>
  )
}

export default ServiceProposalCard