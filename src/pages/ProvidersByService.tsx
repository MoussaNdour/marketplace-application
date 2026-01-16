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
                console.log(response)
                setProviders(response)
            }
        }

        getAllProviderByService()
    }, [serviceId])

    return (
        <div>
            <h1 className="text-center m-[20px] text-2xl">Here are our providers</h1>
            <div className="grid grid-cols-3 gap-x-[10px] gap-y-[30px] place-items-center">
                {providers.map((provider) => (
                    <ProviderCard key={provider.id} provider={provider} />
                ))}
            </div>
        </div>
    )
}

export default ProvidersByService
