

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isProvider } from '../../services/auth'

type PropType = {
    children : React.ReactNode
}

const ProviderLayout = ({children}:PropType) => {

    const navigate = useNavigate()

    useEffect(()=>{
        if(!isProvider())
        {
            navigate("/")
        }
        
    },[])

  return (
    children
  )
}

export default ProviderLayout
