import { useContext } from "react";
import { UrlContext } from "../contexts/UrlContext";

export function useUrl () {
    return useContext(UrlContext)
}