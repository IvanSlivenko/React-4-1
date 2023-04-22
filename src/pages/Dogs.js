
import { useEffect, useState } from "react";
import { Link, useLocation,  useSearchParams } from "react-router-dom";
const Dogs = () => { 

    const [dogs, setDogs] = useState([  'dog-1',
                'dog-2',
                'dog-3',
                'dog-4',
                'dog-5',
    ]);
    
    const location = useLocation();
    const [searchParms, setSearchParams] = useSearchParams();
    const dogId = searchParms.get('dogId') ?? "";

    const updateQueryString = (event) => {
        const dogIdValue=event.target.value
        if ( dogIdValue === "") { 
            return setSearchParams({})
    }  
        setSearchParams({ dogId: event.target.value })
    };


    const visibleDogs = dogs.filter(dog => dog.includes(dogId));

//  useEffect(() => {
//         console.log(dogId);
//         }, [dogId])
    
// "/dogs/:dogId"
    // console.log(location);
    
    return (
        <div>
            <input
                type="text"
                value={dogId}
                onChange={updateQueryString}
                
            />
            {/* <button onClick={() => setSearchParams({c: 'Hello'})}> change SP</button> */}
            <ul>
            {visibleDogs.map(dog => {
                return (
                <li key={dog}>
                        <Link to={`${dog}`} state={{from: location }}>{dog}</Link>
                </li>
                )

            })}
                </ul>
        </div>
        

    )
};

export default Dogs;