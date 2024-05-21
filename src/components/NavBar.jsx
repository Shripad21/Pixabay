import React, { useContext, useState } from 'react'
import { useUrl } from '../hooks/useUrl'

function NavBar() {

    const {url, type, setUrlQuery, setUrlType} = useUrl()
    
    const [input, setInput] = useState('')

    const handleTextChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmitText = (e) => {
        e.preventDefault()
        // console.log(searchText);
        setUrlQuery(input)
        // setUrlType(input)
    }

  return (
    <nav className="flex justify-center border-b-2 border-gray-700 min-h-20">
        <div className="container flex flex-row items-center justify-between mx-auto space-x-4 flex-nowrap ">
        <div className="logo">
            <p className="text-4xl font-bold font-new-font ">
                Pixabay
            </p>
        </div>
        <form className="flex w-full max-w-[40vw] flex-row space-x-0 border border-gray-300 rounded-full shadow-lg flex-nowrap shadow-neutral-200" >
            <input className="w-full p-2 text-lg text-center border-none rounded-l-full outline-none " 
            type="text" 
            name="searchText" 
            id="" 
            placeholder='Search...'
            onChange={handleTextChange}
            value={input}/>
            <button className="p-2 text-lg text-center bg-white border-l-2 border-gray-300 rounded-r-full hover:bg-gray-300" 
            type="submit"
            onClick={handleSubmitText}
            >Search</button>
        </form>
        <ul className="flex flex-row items-start space-x-4 font-bold text-slate-600">
            <li className='duration-150 border-gray-500 hover:text-slate-950 hover:border-b-2'>
                <button 
                onClick={ () => {
                    setUrlType('photo')
                }}
                >Photos</button>
            </li>
            <li className='duration-150 border-gray-500 hover:text-slate-950 hover:border-b-2'>
                <button 
                onClick={ () => {
                    setUrlType('illustration')
                }}
                >Illustrations</button>
            </li>
            <li className='duration-150 border-gray-500 hover:text-slate-950 hover:border-b-2'>
                <button 
                onClick={ () => {
                    setUrlType('vector')
                }}
                >Vectors</button>
            </li>
            <li className='duration-150 border-gray-500 hover:text-slate-950 hover:border-b-2'>
                <button 
                onClick={ () => {
                    setUrlType('video')
                }}
                >Videos</button>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default NavBar
