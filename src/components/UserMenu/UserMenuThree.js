import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import defaultAvatar from '../Pokemon/pending.png';
import authSelectors from "redux/auth/auth-Selector";
import authOperations from "redux/auth/auth-operations";

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 4,
    },
    name: {
        fontWeight: 700,
        marginRight:12 ,
    },
};

export default function UserMenuThree(){ 
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    const avatar = defaultAvatar;

    return (
        <div style={styles.container}>
            <img src={avatar} alt="avatar" width="32" style={styles.avatar} />
            <span style={styles.name}> Ласкаво просимо , {name}</span>
            <button type="button" onClick={() => dispatch(authOperations.LogOut())}>
                Вийти
            </button>

        </div>
    );

};



