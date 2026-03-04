import { useEffect, useState } from 'react'
import { searchService } from '../services/api'
import { Service } from '../types';
import { useParams } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { Button } from '@mui/material';

type PropsType={
    searchData:string;
}

const SearchResultPage = ({searchData}:PropsType) => {
    
    const [results, setResults] = useState<Array<Service>>([]);
    const [searchError, setSearchError] = useState();
    const [searchparam, setSearchparam] = useState<string>("");

    const search = async () => {
        try{
            const response = await searchService(searchparam);
            setResults(response);
        }
        catch(e:any){
            setSearchError(e.message)
        }
    }

    useEffect(()=>{
        if(searchData){
            setSearchparam(searchData);
            search()
        }
        
    },[])

  return (
    <div className='p-5'>
        <h1 className='text-center text-3xl'>Results of researchs</h1>
        <div className='mt-6 mb-6'>
            <form className="flex justify-center gap-x-2.5">
                <input onChange={(e)=>setSearchparam(e.target.value)} className="bg-white rounded border-black border-2 p-3.75 w-25 lg:w-125" type="text" placeholder="what service are you looking for ?"/>
                <Button onClick={()=>{if(searchparam){search()}}} variant="contained" className="bg-amber-500 p-3.75 rounded text-white cursor-pointer">Search</Button>
            </form>
        </div>
        <div className='grid grid-cols-3 pt-7'>
            
            { results ? results.map((service)=>{
                return <ServiceCard key={service.id} service={service} />
            }) : <p className='text-center'>No Result found</p> }
            
        </div>
        { searchError && <p className='text-red-500 text-center'>{searchError}</p> }
    </div>
  )
}

export default SearchResultPage
