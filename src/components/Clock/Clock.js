// import React, { Component } from "react";
import {useState, useEffect, useRef } from 'react';
// import './Clock.scss';
import styles from '../../components/Clock/stylesClock.module.css';




export default function Clock() { 
    const [time, setTime] = useState(() => new Date());
    const intervalId = useRef(null);
    const buttonRef=useRef(null)

    

    useEffect(() => {
        intervalId.current =
            setInterval(() => {
            console.log('Це інтервал кожні 2000ms'+Date.now());
            setTime(new Date());
        }, 1000);

        return () => {
            stop();
         }
    },[time]);


    console.log(time);
    
    const stop = () => {
        // console.log(intervalId);
        clearInterval(intervalId.current);
    };

    const start = () => { 
        intervalId.current = setInterval(() => {
            setTime(new Date());
        }, 1000);
        
    }

    // console.log(buttonRef);
    return (
        <div className={styles.container}>
            <button
                type="button"
                onClick={()=>setTime(new Date())}
            >
                Оновити state Time
            </button>
                <p
                    className={styles.clockface}
                >
                    Поточний час : {time.toLocaleTimeString()}
            </p>
            
                <button
                    type="button"
                    onClick={stop}
                className={styles.Button_onClock}
                ref={buttonRef}
                >
                    Зупинити
            </button>

            <button
                    type="button"
                    onClick={start}
                className={styles.Button_onClock}
                ref={buttonRef}
                >
                    Відновити
                </button>
            
            </div>
        );
};




// class OldClock extends Component { 
//     state = {
//         time: new Date().toLocaleTimeString(),
//     };

//     intervalId = null;

//     componentDidMount() { 
//         // console.log('setInterval');
//         this.intervalId = setInterval(() => {
//             // console.log('Це інтервал кожні 1000ms'+Date.now());
//             this.setState({ time: new Date().toLocaleTimeString() });
//         }, 1000);

//     }

//     componentWillUnmount() { 
//         this.stop(); 
//     }

//     stop = () => { 
//        clearInterval(this.intervalId);
//     }

//     render() { 
//         return (
//             <div className={styles.container}>
//                 <p
//                     className={styles.clockface}
//                 >
//                     Поточний час : {this.state.time}
//                 </p>
//                 <button
//                     type="button"
//                     onClick={this.stop}
//                     className={styles.Button_onClock}
//                 >
//                     Зупинити
//                 </button>
//             </div>
//         );
//     }
// }