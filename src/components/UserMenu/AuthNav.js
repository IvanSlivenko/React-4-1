const { NavLink } = require("react-router-dom");

const styles = {
    link: {
        padding: 12,
        fontWeight: 700,
        color:'#2A363B',
    },
    activeLink: {
        color:'#E840A5F' 
    },

};

export default function AuthNav() {
    <nav>
        <NavLink
            to="/register"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}>
            Реєстрація
        </NavLink>

        <NavLink
            to="/login"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
        >
            Логін
        </NavLink>
    </nav>
};

