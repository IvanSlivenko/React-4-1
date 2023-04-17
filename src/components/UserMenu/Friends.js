import { useState, useMemo } from 'react';
import style from './UserMenu.module.css';

const initialFriends = [
    'Ivan Slivenko',
    'Nataliya Slivenko',
    'Volodumur Slivenko',
    'Mariya Slivenko',
    'Anna Slivenko',
    'Graf Slivenko',
    'Rafaella Slivenko',
    





]

export default function Friends() { 
    const [count, setCount] = useState(0);
    const [friends] = useState(initialFriends);
    const [filter, setFilter] = useState('');


    const visibleFriends = useMemo(() => {
        // console.log('Фільтруємо друзів');
        return friends.filter(friend => friend.toLowerCase().includes(filter));
    }, [filter, friends]);
    

    // const visibleFriends = (() => {
    //      console.log('Фільтруємо друзів');
    //     return friends.filter(friend =>friend.toLowerCase().includes(filter));
    //     })();
    

   

    return (

        <div>
            <button className={style.btn}
                onClick={() => setCount(c => c + 1)}>{count}</button>
            <hr />
            <input onChange={event => setFilter(event.target.value)} value={filter} />
            <ul>
                {visibleFriends.map((friend, idx)=>(  
                    <li key={idx}>{friend }</li>
                ))}
            </ul>
        </div>
    );
}