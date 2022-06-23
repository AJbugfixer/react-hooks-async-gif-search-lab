import React from "react";

function GiftList({gifs}){
    if(!gifs) return null
        return(
            <div>
                <ul>
                    {gifs.map((gif) =>{
                        if(!gif)return null
                        return(
                            
                            <li key={gif.id}>
                                <img src={gif.images.original.url}alt="Gif"></img>
                            </li>
                        )
                    })}
                </ul>
            </div>
        ) 
}
 

export default GiftList