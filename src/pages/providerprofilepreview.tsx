

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProviderProfilePreviewPage = () => {
  const {id} = useParams()

  useEffect(()=>{
    
  })

  return (
    <div>
        <p>You're going to see here the profile of the provider having id:{id}</p>
    </div>
  )
}

export default ProviderProfilePreviewPage
