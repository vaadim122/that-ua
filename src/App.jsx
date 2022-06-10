import React from "react";
// import { AuthProvider } from "oidc-react";
import { OidcProvider } from "@axa-fr/react-oidc";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import routes from "./routes";

function App() {
  const configuration = {
    client_id: "6ade8b8b-0720-4ade-86e6-78b11d1e2049",
    redirect_uri: "http://localhost:3000/callback",
    silent_redirect_uri: "http://localhost:3000/callback",
    scope: "openid profile email api offline_access", // offline_access scope allow your client to retrieve the refresh_token
    authority: "https://identity-test.that42.com",
    service_worker_relative_url: false,
    service_worker_only: false,
  };
  // const oidcConfig = {
  //   onSignIn: () => {
  //     // Redirect?
  //   },
  //   authority: "https://identity-test.that42.com",
  //   clientId: "6ade8b8b-0720-4ade-86e6-78b11d1e2049",
  //   redirectUri: "http://localhost:3000/callback",
  // };
  return (
    // <AuthProvider {...oidcConfig}>
    <OidcProvider configuration={configuration}>
      {console.log(configuration)}
      <div className="App">
        <Router>
          <div>
            <Routes>
              {routes.map(({ Component, path, ...rest }, i) => (
                <Route
                  // exact={true}
                  key={i}
                  path={path}
                  element={<Component />}
                />
              ))}
            </Routes>
          </div>
        </Router>
      </div>
    </OidcProvider>
    // </AuthProvider>
  );
}

export default App;
