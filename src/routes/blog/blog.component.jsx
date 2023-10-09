import React from "react";
import { Link } from 'react-router-dom';

import './blog.component.styles.scss';

import Bar from "../bar/bar.component";
import ArticleCard from "../../component/articlecard/articlecard.component";


function Blog() {
    return (
        <div>
            <Bar 
                barName={'Blog'} 
                barClassName={['All', 'Javascript', 'React', 'CSS']}
            />
            <div className="blogArticle">
                <Link to='/blog/article' className="linkNoUnderline">
                    <ArticleCard 
                        articleCardName={'Compound components - React'}
                        tagName={['React', 'Javascript']}
                    />
                </Link>
            </div>
        </div>
    );
}

export default Blog;


