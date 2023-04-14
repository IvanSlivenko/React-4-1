import { useState, useEffect } from "react";
import PokemonDataView from "./DataView";
import PokemonErrorView from "./ErrorView";
import PokemonPendingView from "./PendingView";
import PokemonAPI from "components/services/pokemon-api";


const Status = {
    IDLE:'idle' ,
    PENDING:'pending',
    RESOLVED:'resolved' ,
    REJECTED:'rejected' ,
};

export default function PokemonInfo({pokemonName}){ 

    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(Status.IDLE);

    useEffect(() => { 

        // console.log('Рендер');

        if (!pokemonName) {
            // console.log('Перший рендер pokemonName це пуста строка не робимо fetch');
            return;
        }
        
       

        setStatus(Status.PENDING);
        
        PokemonAPI
            .fetchPokemon(pokemonName)
            .then(pokemon => {
                setPokemon(pokemon);
                setStatus(Status.RESOLVED);
            })
            .catch(error => {
                setError(error);
                setStatus(Status.REJECTED);
            });
    }, [pokemonName]);

    if (status===Status.IDLE) {
    return <div> Введіть ім'я покемона.</div>
}
    
if (status===Status.PENDING) {
    return <PokemonPendingView pokemonName={pokemonName} />
}

    if (status===Status.REJECTED) {
    return <PokemonErrorView message={error.message} />
}

        if (status===Status.RESOLVED) {
    return <PokemonDataView pokemon={pokemon} />
}


};



