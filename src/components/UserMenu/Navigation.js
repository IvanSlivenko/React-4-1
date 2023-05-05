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

export default function Navigation() {
    <nav>
        <NavLink to="/" style={styles.link} activeStyle={styles.activeLink}>
            Головна
        </NavLink>

        <NavLink
            to="/todos"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
        >
            Нотатки
        </NavLink>
    </nav>
};

