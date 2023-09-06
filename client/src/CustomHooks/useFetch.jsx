import { useState , useEffect } from "react";

function useFetch (url) {
    const [ items , setItems ] = useState(null);
    const [ isPending , setIsPending ] = useState(true);

    useEffect(() => {
        fetch(url) 
        .then(res => res.json())
        .then(res => {
            setItems(items)
            setIsPending(false)
        })
        .catch(err => console.log(err))

    },[])
    return [items , isPending]
}


export default useFetch;