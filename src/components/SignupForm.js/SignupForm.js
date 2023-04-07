import React, { Component } from "react";
import { useState } from "react";
import styles from './SignupForm.module.css';

export default function SignupForm() {

 // hooks
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = event => {
        console.log('email',event.target.value);
        setEmail(event.target.value);
    }

    const handlePasswordChange = event => { 
        console.log('password',event.target.value);
        setPassword(event.target.value);
    }

    const handleChange = event => { 
        // console.log(event.target.name);
        const { name, value, } = event.target;

        switch (name) { 
            case 'email':
                setEmail(value);
                console.log(value);

                
                break;
            
            case 'password':
                setPassword(value);
                console.log(value);
                break;
            
            default:
                return;
        }
    }



    return <form className={styles.form} autoComplete="off">

                <label className={styles.label}>
                    <span> Пошта</span>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                    />
        </label>

        <label className={styles.label}>
                    <span>Пароль</span>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                    />
        </label>
        
                <button
                    className={styles.form__button}
                    type="submit" 
                >
                    Зареєструватись
                </button>
            </form>
}






class OldSignupForm extends Component { 
    state = {

        email: '',
        password:'',

    };

    handleChange = event => { 
        const { name, value } = event.target;
        this.setState({ [name]: value });
    
    }

    render() { 

        return (
            <form className={styles.form} autoComplete="off">
                <label className={styles.label}>
                    <span> Пошта</span>
                    <input
                        type="email"
                        name="email"
                        onCange={this.handleChange}
                        value={ this.state.email}
                    />
                </label>

                <label className={styles.label}>
                    <span> Пароль</span>
                    <input
                        type="password"
                        name="password"
                        onCange={this.handleChange}
                        value={ this.state.password}
                    />
                </label>


                <button
                    type="submit"

                    
                >

                    Зареєструватись
                </button>


            </form>
        )
    }

};
