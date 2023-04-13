import { ImSpinner } from 'react-icons/im';
import PokemonDataView from './DataView';
import pendingImage from './pending.png';




const styles = {

};

export default function PokemonPendingView({ pokemonName }) { 
    const pokemon = {
        name: pokemonName,
        sprites: {
            other: {
                'official-artwork': {
                    front_default: pendingImage,
                },
            },
        },
        status: [],
    };

    return (
        <div role='alert'>
            <div style={styles.spinner}>
                <ImSpinner size="32" className='icon-spin' />
                Завантажуємо
            </div>
            <PokemonDataView pokemon={pokemon} />
        </div>
    );
};



