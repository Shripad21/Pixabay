import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Images from './components/Images.jsx'
import Image from './components/Image.jsx'

const router = createBrowserRouter((
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Images />} />
      <Route path='image/:id' element={<Image />}>
        
      </Route>
    </Route>
  )
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
