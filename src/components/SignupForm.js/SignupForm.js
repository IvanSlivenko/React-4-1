import React, { Component } from "react";
import { useState } from "react";
import styles from './SignupForm.module.css';

export default function SignupForm() {
    const [email, setEmail] = useState('qweqwe');
 

    const handleEmailChange = event => {
        console.log(event.target.value);
    }



    return <form className={styles.form} autoComplete="off">

                <label className={styles.label}>
                    <span> Пошта</span>
                    <input
                        type="email"
                        name="email"
                        onChange={handleEmailChange}
                        value={email}
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
