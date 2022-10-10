import Keycloak from "keycloak-js";

const _kc = new Keycloak('/keycloak.json');

const initKeycloak = (onAuthenticatedCallback: () => void) => {
    _kc.init({})
        .then((authenticated) => {
            if (!authenticated) {
                console.log("User not authenticated")
                console.log("Keycloak Set up correctly");
            }
            onAuthenticatedCallback();
        })
        .catch(console.error);
};

const doLogin = _kc.login;

// Tutaj trzeba dać cały adres
const doLogout = () => _kc.logout({ redirectUri: "http://localhost:3000" });

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback: any) =>
    _kc.updateToken(5)
        .then(successCallback)
        .catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles: string[]) => roles.some((role) => _kc.hasRealmRole(role));

const UserService = {
    initKeycloak,
    doLogin,
    doLogout,
    isLoggedIn,
    getToken,
    updateToken,
    getUsername,
    hasRole,
};

export default UserService;