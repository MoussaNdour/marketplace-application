import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Provider } from '../types'
import { getProvidersByService } from '../services/api'
import ProviderCard from '../components/ProviderCard'

const ProvidersByService = () => {
  const { id } = useParams()
  const [providers,setProviders] = useState<Array<Provider>>()

  useEffect(()=>{
    const getProviders = async () => {
      if(id){
        const response = await getProvidersByService(parseInt(id))

        setProviders(response);

        console.log(response)
      }
      
    }

    getProviders()
  },[id])


  return (
    <div>
      <p className='text-3xl text-center m-6.5'>You're going to see here the providers that provide service having id:{id}</p>
      <div className='grid grid-cols-3 place-items-center gap-y-12.5'>
        { providers &&
          providers.map((provider)=>{
            return <ProviderCard key={provider.id} provider={provider}/>
          })
        }
      </div>
    </div>
  )
}

export default ProvidersByService
