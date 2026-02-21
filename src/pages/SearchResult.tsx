import { useEffect, useState } from 'react'
import { searchService } from '../services/api'
import { Service } from '../types';
import { useParams } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { Button } from '@mui/material';



const SearchResultPage = () => {
    const { searchData } = useParams<string>()
    const [results, setResults] = useState<Array<Service>>([]);
    const [searchError, setSearchError] = useState();
    const [searchparam, setSearchparam] = useState<string>();

    useEffect(()=>{
        const search = async () => {
            try{
                if(searchData){
                    const response = await searchService(searchData);
                    console.log(response);
                    setResults(response);
                }
                
            }
            catch(e:any){
                setSearchError(e.message)
            }
        }
        
        search()
    },[])

  return (
    <div className='pt-5'>
        <h1 className='text-center text-3xl'>Results of researchs</h1>
        <div className='mt-6 mb-6'>
            <form className="flex justify-center gap-x-2.5">
                <input onChange={(e)=>setSearchparam(e.target.value)} className="bg-white rounded border-black border-2 p-[15px] w-[100px] lg:w-[500px]" type="text" placeholder="what service are you looking for ?"/>
                <Button href={`/search/${searchparam}`} variant="contained" className="bg-amber-500 p-[15px] rounded text-white cursor-pointer">Search</Button>
            </form>
        </div>
        <div className='grid grid-cols-3 pt-7'>
            
            { results.map((service)=>{
                return <ServiceCard key={service.id} service={service} />
            }) }
            
        </div>
        { searchError && <p className='text-red-500 text-center'>{searchError}</p>}
    </div>
  )
}

export default SearchResultPage
