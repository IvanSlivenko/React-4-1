import { useEffect, useRef,Suspense } from "react";
import { Link, Outlet, useParams,useLocation } from "react-router-dom";

const DogDetails = () => {
    const { dogId } = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
   
    // useEffect(() => {
    //     // HTTP запит, якщо потрібно       
    //     }, [])
    
   

    return (
        <>
            <h1>DogDetails: {dogId}</h1>
            <Link to={backLinkLocationRef.current}>Назад</Link>
        <ul>
            <li>
                    <Link to="subbreeds">Підпороди</Link>
                    
                </li>
                <li>
                    
                    <Link to ="gallery">Галерея</Link>
            </li>
       
            </ul>
            <Suspense fallback={<div>LOADING SUPRADGE ...</div> }>
                <Outlet />
            </Suspense>
    </>
    );
};

export default DogDetails;