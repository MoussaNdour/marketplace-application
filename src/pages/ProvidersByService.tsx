import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProviderCard from "../components/ProviderCard"
import { Provider } from "../types"
import { getProviderByService } from "../services/api"

const ProvidersByService = () => {
    const { serviceId } = useParams<{ serviceId: string }>()
    const [providers, setProviders] = useState<Provider[]>([])

    useEffect(() => {
        const getAllProviderByService = async () => {
            if (serviceId) {
                const response = await getProviderByService(Number(serviceId))
                setProviders(response)
            }
        }

        getAllProviderByService()
    }, [serviceId])

    return (
        <div>
            <h1>Here are our providers</h1>
            {providers.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} />
            ))}
        </div>
    )
}

export default ProvidersByService
