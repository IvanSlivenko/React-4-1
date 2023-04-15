import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsSearchForm from './NewsSearchForm';


export default function News({title, url}) { 
    const [articles, setArticles] = useState([]);
    
    // useEffect(() => { 



    // })



    return (
        <>
            <ul>
                {articles.map(({title, url}) => (
                    <li key={title}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            {title}
                        </a>
                  </li>
                ))}
            </ul>
        </>
    )


}