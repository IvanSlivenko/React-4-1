import React from "react";


const styles = {
    container: {
        // minHeight: 'calc(100vh-50px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 700,
        // fontSize: 48,
        textAlign: 'center',
    },
};
export const ViewTwo = () => {
    return (
        <div style={styles.container}>
        <h1 style={styles.title}>
            Персональна сторінка Ivan
            <span role="img" aria-label="іконка вітання">
            😃
            </span>
            </h1> 
        </div>
        
        // <div>
        //     <span>787878</span>
        // </div>
    )
};

 
