import React, { useEffect, useState } from 'react'
import { useUrl } from '../hooks/useUrl'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Images() {

    const {url} = useUrl()
    const [imageData, setImageData ] = useState([])

    async function fetchImg(){
        try {
            const result = await axios.get(url);
            setImageData(result.data.hits);
        } catch (err) {
            console.log('error fetching images : ', err.stack);
        }
    }

    useEffect(() => {
        fetchImg()
    },[url])

  return (
    <div className='container mx-auto my-10'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3'>
            {imageData.map((img, index) => (
                <Link to={'image/' + img.id} key={index} className='flex flex-col items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] relative overflow-hidden rounded-sm'>
                    <img src={img.webformatURL} alt="sample img"
                 className='' />
                 <div className='flex items-center justify-around w-full flex-nowrap'>
                    <div className='flex items-center justify-center flex-nowrap'>
                        <span className="material-symbols-outlined">
                            favorite
                        </span>
                        <p>{img.likes}</p>
                    </div>
                    <div className='flex items-center justify-center flex-nowrap'>
                        <span className="material-symbols-outlined">
                        download
                        </span>
                        <p>{img.downloads}</p>
                    </div>
                 </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Images