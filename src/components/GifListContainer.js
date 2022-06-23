import React, { useEffect, useState } from "react";
import GiftList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer(){
    const [gif, setGif] = useState(``)
    const[serchInput, setSearchInput] = useState (``)

    useEffect(() =>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${serchInput}&api_key=qQn3dhC0aPc8ZO1z19nt4zl7lnnPUC60&rating=g`)
    .then((data) => data.json())
    .then((data) =>{
        return setGif([data.data[0], data.data[1],data.data[2]])
    })
}, [serchInput])
    return(
        <div className="container">
            <div className="row">
            <GifSearch onSearchInput={(e) => setSearchInput(e)}/>
            <GiftList gifs={gif}/>
            </div>
        </div>
    )

}


export default GifListContainer