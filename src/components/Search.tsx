

const Search = ({setSearchTerm}) => {



    return(
        <div className={"flex"}>
            <img src="/search.svg" alt={"search"}/>

            <input type={"text"} placeholder={"Taper le terme a rechercher"} onChange={(e)=>{
                setSearchTerm(e.target.value)
            }}/>
        </div>
    )
}

export default Search