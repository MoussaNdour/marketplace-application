import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Provider } from '../types'
import { getProvidersByService } from '../services/api'

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
      <p>You're going to see here the providers that provide service having id:{id}</p>
      <div>

      </div>
    </div>
  )
}

export default ProvidersByService
