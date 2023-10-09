import React from "react";

import './articlecard.component.styles.scss'

function ArticleCard({articleCardName, tagName}){
    const tagArray = tagName;
    const item = tagArray.map((name) => <div className="tagName">{name}</div>)

    return(
        <div className="articleCard" key={articleCardName}>
            <p className="articleCardName">{articleCardName}</p>
            <div className="tagContainer">
                {item}
            </div>
        </div>
    )
}

export default ArticleCard;



