import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DogDetails = () => {
    const { dogId } = useParams();


    useEffect(() => {
        // HTTP запит, якщо потрібно       
        }, [])
    
    

    return (
        <>
        <h1>DogDetails: {dogId}</h1>
        <ul>
            <li>
                    <Link>Підпороди</Link>
                    
                </li>
                <li>
                    
                    <Link>Галерея</Link>
            </li>
       
        </ul>

    </>
    );
};

export default DogDetails;