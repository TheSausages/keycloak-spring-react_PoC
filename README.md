# PoC for apps with react front + Spring backend + Keycloak

Small PoC that tests Oauth2 with PKCE for Spring + React + Keycloak.
If started correctly, 2 endpoints are called for Public and Secured Page (to check Backend Security).
To log in for security use:
* username: test
* password: Password1

## How to run
Docker, Gradle and npm must be installed.

1. Run [docker-compose](./docker/compose/basic-docker-compose.yml)
2. Run the Backend App (no config required)
3. Run frontend using `npm start` (in [./frontend/keycloak-react-spring-example](./frontend/keycloak-react-spring-example))


## Small comments

For Frontend keycloak-js is used to make managing state easier.

For backend, no apater is used - only the spring oicd configuration with a custom
jwt decoder (Keycloak JWT have roles inside another field [see](./src/main/java/com/example/keycloakspringreactexample/CustomJwtAuthenticationConverter.java))

For Keycloak, it's created using docker. A Realm is prepared with all necessary configurations and a test User.

## Based on:
* https://ordina-jworks.github.io/security/2019/08/22/Securing-Web-Applications-With-Keycloak.html
* https://spring.io/blog/2022/02/21/spring-security-without-the-websecurityconfigureradapter
* https://blog.logrocket.com/implement-keycloak-authentication-react/
* https://github.com/dasniko/keycloak-reactjs-demo
* https://stackoverflow.com/questions/60003705/jwtaccesstokenconverterconfigurer-alternate

Important:
Keycloak should be max version 17 - this info can be false, so check for yourself

