import React, { Component } from "react";
import { useState, useEffect  } from "react";
import styles from './SignupForm.module.css';
import useLocalStoradge from '../../components/hooks/useLocalStorage';



export default function SignupForm() {

 // hooks
    const [email, setEmail] = useLocalStoradge('email','');
    const [password, setPassword] = useLocalStoradge('password','');
   
    const handleChange = event => { 
        // console.log(event.target.name);
        const { name, value, } = event.target;

        switch (name) { 
            case 'email':
                setEmail(value);
                // console.log(value);
                
                break;
            
            case 'password':
                setPassword(value);
                // console.log(value);
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


