import { NavLink, Link } from "react-router-dom";
// const { NavLink } = require("react-router-dom");

const styles = {
    link: {
        padding: 12,
        fontWeight: 700,
        color: '#2A363B',
        // background: 'green',
    },
    activeLink: {
        color:'#E84A5F' 
    },

};



export const Navigation=()=> {
    
    return (
        < nav >
            <NavLink
                to="/"
                style={styles.link}
                activestyle={styles.activeLink}>
            Головна
        </NavLink>

        <NavLink
            to="/todos"
            exact='true'
            style={styles.link}
            activestyle={styles.activeLink}
        >
            Нотатки
            </NavLink>
             
        </nav >
       
    )
};

