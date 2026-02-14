import {useEffect, useState} from "react";
import {Provider} from "../types";
import { getAllProviders } from "../services/api";
import ProviderCard from "../components/ProviderCard";


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
        <div>
            <h1 className="text-center text-2xl">Here are our providers</h1>
            <div className="grid grid-cols-3 place-items-center gap-y-[50px]">
                {
                    providers?.map((provider)=>{
                        return <ProviderCard key={provider.id} provider={provider} />
                    })
                }
            </div>

        </div>
    )
}

export default Providers;