import { useEffect, useState } from 'react'


export default function NotFound() {

    const [url, setUrl] = useState("");
    useEffect(() =>{
        fetchCat();
    }, [])

    async function fetchCat() {
       const res = await fetch("https://api.thecatapi.com/v1/images/search");
       const obj = await res.json();
       setUrl(obj[0].url);
    }

  return (
    <div>
       <h1>Not found</h1>
    <img src={url} alt="" />
    </div>
  )
}
