import { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

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
                    <Link to="subbreeds">Підпороди</Link>
                    
                </li>
                <li>
                    
                    <Link to ="gallery">Галерея</Link>
            </li>
       
            </ul>
            <Outlet/>
    </>
    );
};

export default DogDetails;