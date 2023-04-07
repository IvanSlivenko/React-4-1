import React, { PureComponent } from "react";
import {useState} from "react";
// import classNames from "classnames";
import styles from './ColorPicker.module.css';

export default function ColorPicker({ options }) {
    const [activeOptionIdx, setActiveOptionIdx] = useState(0);

    const {label} = options[activeOptionIdx];

    const makeOptionClassName = index => {
       
        return index === activeOptionIdx ? styles.activeOption :
            styles.option;  
    };

    return (
        <div className={styles.ColorPicker }>
            <h2 className={styles.ColorPicker__title}>Color Picker</h2>
            <p>Обрано колір : {label}</p>
            <div>
                {options.map(({ label, color }, index) => {
                    return (
                        <button
                            key={label}
                            aria-label={label}
                            className={makeOptionClassName(index)}
                            style={{
                                backgroundColor: color,
                            }}
                            onClick={() => setActiveOptionIdx(index)}
                        ></button>
                    );
                })}
            </div>
        </div>
    );
    
}

