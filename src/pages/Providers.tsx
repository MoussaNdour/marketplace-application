import {useEffect, useState} from "react";
import {Provider} from "../types";


const Providers = () => {

    const [providers, setProviders] = useState<Array<Provider>>()

    useEffect(() => {
        const fetchProviders = async () =>{

        }

        fetchProviders()
    }, []);

    return(
        <div>
            <h1>Here are our providers</h1>
        </div>
    )
}

export default Providers;