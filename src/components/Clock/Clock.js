import React, { Component } from "react";
import './Clock.scss';
import styles from '../../components/Clock/stylesClock.module.css';

export default class Clock extends Component { 
    state = {
        time: new Date().toLocaleTimeString(),
    };


    componentDidMount() { 
        // console.log('setInterval');
        this.intervalId = setInterval(
            () => this.setState({time:new Date().toLocaleTimeString() }),
            1000,
        );
    }

    componentWillUnmount() { 
        clearInterval(this.intervalId);
    }

    render() { 
        return (
            <div className={styles.container}>
                <p
                    className={styles.clockface}
                >
                    Поточний час : {this.state.time }
                </p>
        
        
        
        
            </div>
            )
    }
}