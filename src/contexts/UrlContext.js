import { createContext } from "react";

export const UrlContext = createContext({
    url: `https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&`,
    type:'image_type=photo',
    query:'q=yellow+flowers',
    setUrlQuery: (input) => {},
    setUrlType: (input) => {},
})
// 



