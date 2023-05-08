import React from "react";


const styles = {
    container: {
        minHeight: 'calc(100vh-50px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
    },
};
export const TodosView = () => {
    return(
    <div style={styles.container}>
        <h1 style={styles.title}>
            todos
            
        </h1>
    </div>
    )
};
 
// export default TodosView;