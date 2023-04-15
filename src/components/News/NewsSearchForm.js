import { useState } from 'react';


export default function NewsSearchForm({onSubmit, }) { 
    const [query, setQuery] = useState('');

    const handleChange = event => {
        setQuery(event.currentTarget.value)
    // console.log(query);
    };

    const handleSubmit = event => {
        event.preventdefault();
        onSubmit(query);
        setQuery('');

    }

    return (
    
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
            />

            <button type="submit"> Шукати</button>


        </form>
)



}