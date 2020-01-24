import React from 'react'

const Card=({id,caption,url})=>{
    return(
        <div className="gallery-item">
            <img className="gallery-image" alt='robots' src={url}/>
            
        </div>
    );
}

export default Card;