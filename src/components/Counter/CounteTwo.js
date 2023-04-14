// import React from 'react';

import styles  from'./Counter.module.css';
import { useState, useEffect } from 'react';


export default function CounterTwo() { 


    const [count, setCount] = useState(0);
    
    
   


    return (
        <div className={styles.container}>
            <p className={styles.value}>{count} </p>
            <button
                className={styles.btn}
                type="button"
                onClick={() => setCount(state=>state+1)}
            >
                Збільшити
            </button>
             <button
                className={styles.btn}
                type="button"
                onClick={() => setCount(state=>state-1)}
            >
                Зменшити
            </button>

            
            
        </div>
    );
};




// class OldCounter extends React.Component { 

//     static defaultProps = {

//         initialValue:0,
//     }

//     static propTypes = {

//     }


//     state = {
//         value: this.props.initialValue,
//     };

//     handleIncrement = () => {
        
//         // this.setState({ value: 123123 });

//         this.setState(
//             prevState => ({
//             value: prevState.value+1,   
//                         })
//                     );
//      }

//     handleDeckrement = () => {
//         this.setState(
//             prevState => ({
//             value: prevState.value-1,   
//                         })
//                     );
//     }

//     render() { 
//         const { value } = this.state;
//         return (
//             <div className="Counter">
//                <Value value={value}/>
//                <Controls
//                     onIncrement={this.handleIncrement}
//                     onDecrement={this.handleDeckrement}
//                 />
//             </div>
//         );        
//     }
// }



// export default Counter;