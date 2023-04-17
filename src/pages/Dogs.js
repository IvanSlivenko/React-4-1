import { useEffect } from "react";
import { Link } from "react-router-dom";
const Dogs = () => { 

 useEffect(() => {
        // HTTP запит, якщо потрібно       
        }, [])
    
// "/dogs/:dogId"
    return (
        <div>
            {[  'dog-1',
                'dog-2',
                'dog-3',
                'dog-4',
                'dog-5',
            ].map(dog => {
                return (
                
                    <Link key={dog} to={`/dogs${dog}`}>{dog}</Link>
                
                )

             })}
        </div>
        

    )
};

export default Dogs;