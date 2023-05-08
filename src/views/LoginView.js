import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations  from '../redux/auth/auth-operations';

const styles = {
    form: {
        width: 320,
        height: 400,
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 15,
    },
     container: {
        // minHeight: 'calc(100vh-50px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 500,
        // fontSize: 48,
        textAlign: 'center',
    },
};

export const  LoginView=()=> { 
//     const dispatch = useDispatch();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');


// const handleChange = ({ target: { name, value } }) => { 

//     switch (name) { 
//         case 'email':
//             return setEmail(value);
//         case 'password':
//             return setPassword(value);
//         default:
//             return;
//     }
// };

// const handleSubmit = event => {
//     event.preventDefault();
//     dispatch(operations.logIn({ email, password }));
//     setEmail('');
//     setPassword('');

//     };

    return (
        <div>
            <h1> Логін</h1>
            {/* <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">

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

                <button>
                    Увійти
                </button>
                
            </form> */}
            {/* ////////////////////////////////////////// */}
             <form onSubmit={''} style={styles.form} autoComplete="off">

                <label style={styles.label}>
                    Пошта
                    <input
                        type="email"
                        name="email"
                        value={''}
                        onChange={''}
                    />
                </label>

                <label style={styles.label}>
                    Пароль
                    <input
                        type="password"
                        name="password"
                        value={''}
                        onChange={''}
                    />
                </label>

                <button>
                    Увійти
                </button>
                
            </form>

        </div>

        
    )
};