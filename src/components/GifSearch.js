import React, { useState } from "react";

function GifSearch ({onSearchInput}){
    const [searchInput, setSearchInput] = useState(``)

    function searchHandler(e){
        e.preventDefault()
        onSearchInput(searchInput)
    }

    return(
        <div>
        <form onSubmit={(e) => searchHandler(e)}>
            <label htmlFor="gifSearch">Enter a search Term</label>
            <input onChange={(e) => setSearchInput(e.target.value)}></input>
            <br/><br/>
            <button type="submit"className="btn-primary">Find GIF's</button>
        </form>
        </div>
    )
}

export default GifSearch