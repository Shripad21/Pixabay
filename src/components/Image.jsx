import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 
function Image(props){

    const {id} = useParams()
    const [imageData, setImageData ] = useState([])
    const [imageSize, setImageSize] = useState('medium')
    const [downloadUrl, setDownloadUrl] = useState(imageData.webformatURL)

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

    useEffect(() => {
        const url = imageSize === 'small' ? imageData.previewURL : (imageSize === 'large' ? imageData.largeImageURL : imageData.webformatURL);
        setDownloadUrl(url);
    }, [imageSize, imageData]);    

    const handleDownload = async () => {
        try {
            const response = await fetch(downloadUrl);
            const blob = await response.blob();
            const blobURL = URL.createObjectURL(blob);
    
            const link = document.createElement('a');
            link.href = blobURL;
            link.download = 'image.jpg';
            link.click();
    
            URL.revokeObjectURL(blobURL);
        } catch (error) {
            console.error('Error occurred during download:', error);
        }
    };

    return <div className="container block mx-auto ">
        <h1>{JSON.stringify(imageData)}</h1>
        <hr />
        <h2>Tags : {JSON.stringify(imageData.tags)}</h2>
        <hr />
        <div className="flex flex-row items-center justify-around p-4 mx-auto my-4 space-x-4 bg-slate-300 ">
            <h2 className="text-2xl "> Size</h2>
            <select value={imageSize} onChange={(e) => {
                setImageSize(e.target.value)
            }}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            <button className="p-2 text-white duration-150 rounded-sm hover:text-slate-800 hover:bg-gray-500 bg-slate-500" onClick={() => {
                handleDownload();
            }}>Download</button>
        </div> 
        <hr />
        <img src={imageData.webformatURL} alt="" />
    </div>
}

export default Image;