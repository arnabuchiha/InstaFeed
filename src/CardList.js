import React from 'react'
import Card from './components/Card';

const CardList=({feeds})=>{
    const cardComponent=feeds.map((feed,i)=>{
        return (<Card key={i} caption={feeds[i].caption} url={feeds[i].media_url}/>)
    })

    return(
        <div className="gallery">
            {cardComponent}
        </div>
    )
}
export default CardList;