const { NavLink } = require("react-router-dom");

const styles = {
    link: {
        padding: 12,
        fontWeight: 700,
        color: '#2A363B',
    },
    activeLink: {
        color:'#E84A5F', 
    },

};

export const AuthNav = () => {
    return(
    <nav>
        <NavLink
                to="/register"
                exact='true'
                style={styles.link}
                activestyle={styles.activeLink }
            >
            Реєстрація
        </NavLink>

        <NavLink
            to="/login"
            exact='true'
                style={styles.link}
                activestyle={styles.activeLink }
            
        >
            Логін
        </NavLink>
        </nav>
    )
};

