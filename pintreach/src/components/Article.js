import React from 'react';

const Article = props => {
    return (
        <div class="article-list">
            {props.articlesList && props.articlesList.map((article, index) =>
                <div className="article" article={article} key={index} />


            )}
        </div>

    )
}

export default Article;