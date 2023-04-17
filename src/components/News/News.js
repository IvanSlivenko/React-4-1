import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsSearchForm from './NewsSearchForm';


axios.defaults.headers.common['Authorization'] =
    'Bearer 4330ebfabc654a6992c2aa792f317a3';

const API_KEY = '24a2855f353b40d0862e775cdb0bf90d';
const API_KEY_rapidapi = 'c3eaf954a4msh8384580447603f2p16d57ajsnc05d70c72ef1';
const X_RapidAPI_Host = 'openai80.p.rapidapi.com';
const API_KEY_mediastack= 'a01880da2e5b686d6340de075c63e59b';



const fetchArticles = ({
    searchQuery = '',
    currentPage = 1,
    pageSize = 5
} = {}) => {
    return axios
           
        

        // .get(`http://api.mediastack.com/v1/news?access_key=${API_KEY_mediastack}
        // &sources=cnn
        // &sources=uk
        // &sources=${searchQuery}
        // &limit=${pageSize}
        // &offset=${currentPage}`


        //////////////////////////////////////////////////////////////

        // .get(`https://openai80.p.rapidapi.com/models?q=${searchQuery}
       
        // // &X-RapidAPI-Key=${API_KEY_rapidapi}
        // // &X-RapidAPI-Host=${X_RapidAPI_Host}
        // // &pageSize=${pageSize}
        // // &page=${currentPage}
        // // &language=uk`
        ////////////////////////////////////////////////////////////////    



        ////////////////////////////////////////////////////////
        .get(`https://newsapi.org/v2/everything?q=${searchQuery}
        &apiKey=${API_KEY}
        &pageSize=${pageSize}
        &page=${currentPage}
        &language=uk`
        ///////////////////////////////////////////////////////
       
    ).then(response => response.data.articles);
};



export default function News({ title, url }) {
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsloading] = useState(false);

   
    
    useEffect(() => {
        setIsloading(true);

        fetchArticles({ searchQuery: query, currentPage }).then(
            responseArticles =>{
                // setArticles(responseArticles)
            setArticles(prevArticles => [...prevArticles, ...responseArticles]);
            setCurrentPage(prevCurrentpage => prevCurrentpage + 1);    
        },    
        ).finally( () => setIsloading(false));
    }, [currentPage, query]);
    

    const onChangeQuery = query => {
        setQuery(query);
        setCurrentPage(1);
        setArticles([]);


    };

   


    return (
        <>
            <NewsSearchForm onSubmit={onChangeQuery}/>
            <ul>
                {articles.map(({title, url}) => (
                    <li key={title}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            {title}
                        </a>
                  </li>
                ))}
            </ul>

            {isLoading && (
                <p style={{ fontSize: 24, direction: 'flex', alignItems: 'Center' }}>
                    Завантажуємо 
                    <span
                        arial-label="Іконка"
                        role="img"
                        style={{fontSize : 32, marginLeft:10}}
                    >
                        {`Новини що містять ${query}`}
                    </span>

                </p>

            )}



        </>
    )


}