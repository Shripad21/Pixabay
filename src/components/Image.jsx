import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 
function Image(props){

    const {id} = useParams()
    const [imageData, setImageData ] = useState([])

    async function fetchImg(){
        try {
            const result = await axios.get(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&id=` + id);
            setImageData(result.data.hits[0]);
        } catch (err) {
            console.log('error fetching images : ', err.stack);
        }
    }

    useEffect(() => {
        fetchImg()
        console.log(imageData);
    },[])

    return <div className=" container mx-auto block">
        <h1>{JSON.stringify(imageData)}</h1>
        <hr />
        <h2>Tags : {JSON.stringify(imageData.tags)}</h2>
        <hr />
        <img src={imageData.webformatURL} alt="" />
    </div>
}

export default Image;