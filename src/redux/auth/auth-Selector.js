const getIsLoggedIn = state => state.auth.isLoggedId;

const getUsername = state => state.auth.user.name;


const authSelectors = {
    getIsLoggedIn,
    getUsername,
};
export default authSelectors;