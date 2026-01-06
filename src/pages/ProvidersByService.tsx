

import React from 'react';
import {useParams} from "react-router-dom";

const ProvidersByService = () => {

    const {serviceId}=useParams()
    console.log("L'id du service est " + serviceId)

    return(
        <div>

        </div>
    )

};

export default ProvidersByService;
