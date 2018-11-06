import React from 'react'

const NewsListItem = ({item}) => {
    return(
        <div className="newslist-item" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.feed}</p>
        </div>
    )
}

export default NewsListItem;