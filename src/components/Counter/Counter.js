import React from 'react';
import Controls from './Controls';
import Value from './Value';
import styles  from'./Counter.module.css';
import { useState, useEffect } from 'react';


export default function Counter() { 


    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);
    
    const handleCounterAIncrement = () => {
        setCounterA(state => state + 1);  
    }
    
      const handleCounterBIncrement = () => {
        setCounterB(state => state + 1);  
    }
    
    useEffect(() => { 
        console.log('Запускається  useEffect' + Date.now());
        const totalClicks = counterA + counterB;
        document.title = `Всього клікнули ${totalClicks} разів`;
    },[counterA, counterB]);


    return (
        <>
            <button
                className={styles.btn}
                type="button"
                onClick={handleCounterAIncrement }
            >
                Клікнули counterA  {counterA } разів
            </button>

            
            <button
                className={styles.btn}
                type="button"
                onClick={handleCounterBIncrement }
            >
                Клікнули counterB  {counterB} разів
            </button>
        </>
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