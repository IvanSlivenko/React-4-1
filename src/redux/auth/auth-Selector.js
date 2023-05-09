const getIsLoggedIn = state => state.autch.isLoggedIn;



const getUsername = state => state.autch.user.name;


const authSelectors = {
    getIsLoggedIn,
    getUsername,
};
export default authSelectors;