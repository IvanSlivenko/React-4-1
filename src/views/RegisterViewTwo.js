import { useState } from 'react';
import { useDispatch } from 'react-redux';
import  authOperations  from '../redux/auth/auth-operations';

const styles = {
    form: {
        width: 320,
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 15,
    },
};

export default function RegisterViewTwo() { 
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


const handleChange = ({ target: { name, value } }) => { 

    switch (name) { 
        case 'name':
            return setName(value);
        case 'email':
            return setEmail(value);
        case 'password':
            return setPassword(value);
        default:
            return;
    }
};

const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');

    };

    return (
        <div>
            <h1> Сторінка реєстрації</h1>
            <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
                <label style={styles.label}>
                    Ім'я
                </label>

                <label style={styles.label}>
                    Пошта
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>

                <label style={styles.label}>
                    Пароль
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>

                <button >
                    Зареєструватись
                </button>
                
            </form>
        </div>
    )
};