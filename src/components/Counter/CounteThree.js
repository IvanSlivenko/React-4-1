// import React from 'react';

import styles  from'./Counter.module.css';
import { useState, useEffect, useReducer } from 'react';




// function countReducer(prevState, nextState) {
    function countReducer(state, action) {
    
        switch (action.type) {
            case 'increment':
                // return state + action.payload
                return { ...state, count: state.count + action.payload };
            
            case 'decrement':
                // return state-action.payload
                return { ...state, count: state.count - action.payload };
            default:
                // return state;
                
                throw new Error(`Unsuported action type ${action.type}`);
                
        }
    
}

function init(initialState) {
    return {...initialState,count:initialState.count+0,}
}


export default function CounterThree() { 


    // const [count, setCount] = useState(0);

    // const [state, dispatch] = useReducer(reduser, initialState, init);
    const [state, dispatch] = useReducer(countReducer, {
        count: 0
    }, init,);

    return (
        <div className={styles.container}>
            <p className={styles.value}>{state.count} </p>
            <button
                className={styles.btn}
                type="button"
                onClick={() => dispatch({type: 'increment', payload:1})}
            >
                Збільшити
            </button>
             <button
                className={styles.btn}
                type="button"
                onClick={() => dispatch({type: 'decrement', payload:1})}
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