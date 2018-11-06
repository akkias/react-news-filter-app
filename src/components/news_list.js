import React from 'react'
import NewsListItem from './news_list_item';

const NewsList = ({news}) => {
    return (
        <div className="newslist-wrapper">
            {news.map((item) => {
                return(
                    <NewsListItem key={item.id} item={item} />
                )
            })}
        </div>
    )
}

export default NewsList;