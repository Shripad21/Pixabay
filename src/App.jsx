import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { UrlContext } from './contexts/UrlContext'
import Images from './components/Images'

// {
//   url: `https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&`,
//   type:'image_type=photo',
//   query:'q=yellow+flowers',
//   setUrlQuery: (input) => {},
//   setUrlType: (input) => {},
// }

function App() {

  const [url, setUrl] = useState(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&`)
  const [type, setType] = useState('image_type=photo')
  const [query, setQuery] = useState('q=yellow+flowers')

  const setUrlQuery = (input) => {
    let searchText = input.replace(/ /g, '+');
    setQuery(`q=${searchText}`)
    
  }
  const setUrlType = (input) => {
    setType(`image_type=${input}`)

  }

  useEffect(() => {
    setUrl(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&` + query + '&' + type)
    console.log('url is : ' + url);
  },[type, query])

  return (
    <UrlContext.Provider value={{url, type, query, setUrlQuery, setUrlType}}>
      <NavBar />
      {/* <Images  /> */}
      <Outlet />
    </UrlContext.Provider>
  )
}

export default App
