import { SearchIcon } from 'lucide-react'
import React, { useContext } from 'react'
import { ImageContext } from '../contexts/ImageContextProvider'

const SearchField = () => {

    const { inputValue,setInputValue, setSearchQuery,setPage,setSearchTitle } = useContext(ImageContext)

    const handleSearch = () => {
        setPage(1);
        setSearchQuery(inputValue);
        setSearchTitle(inputValue)
        setInputValue('')
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    }


  return (
      <div className=' relative flex h-80 justify-center bg-hero-banner bg-cover bg-center items-center'>
          {/* Hero Banner */}
          <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50 z-10"></div>

          {/* Search */}
          <div className=" z-20 my-auto relative flex items-center mx-auto w-full sm:w-1/2 px-10">
              <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} onKeyPress={handleKeyPress} type="text" className=" border border-gray-500 drop-shadow-lg p-4 w-full placeholder:text-slate-300 rounded-lg bg-white/30 text-white"
                  placeholder='Search for images...' />
              <button disabled={!inputValue} onClick={handleSearch} className=" px-5 py-2 text-slate-300 absolute right-10">
                  <SearchIcon/>
              </button>
          </div>
    </div>
  )
}

export default SearchField