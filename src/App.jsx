import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";
import routes from "./routes";
import { getThatList, getProfile } from "./redux/actions/tasks.actions";
import { useAuth } from "react-oidc-context";
import FormLogin from "./components/Form/FormLogin";
import PublicList from "./pages/PublicList/PublicList";
import ListPage from "./pages/List/ListPage";
import NotPublic from "./pages/NotPublic/NotPublic";
import NotFoundList from "./pages/NotPublic/NotFoundList";
import FilmPage from "./pages/Film/FilmPage";

// const TRACKING_ID = "UA-196401536-1";
const TRACKING_ID = "UA-241428753-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  const auth = useAuth();
  let Authenticated;
  if (localStorage.getItem("Authenticated") == null) {
    Authenticated = false;
  } else {
    Authenticated = localStorage.getItem("Authenticated");
  }

  const dispatch = useDispatch();

  const pname = window.location.pathname;
  const tag_page = pname.split("/");
  if (
    window.location.pathname !== "/callback" &&
    window.location.pathname !== "/login"
  ) {
    sessionStorage.setItem("redirect_url", window.location.pathname);
  }

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    if (Authenticated) {
      const token = localStorage.getItem("MyToken");
      dispatch(getThatList(token));
      dispatch(getProfile(token));
    }
  }, [Authenticated, dispatch]);

  useEffect(() => {
    // the `return` is important - addAccessTokenExpiring() returns a cleanup function
    return auth.events.addAccessTokenExpiring(() => {
      // eslint-disable-next-line no-lone-blocks
      {
        auth.signinSilent();
      }
    });
  }, [auth.events, auth.signinSilent, auth]);

  // eslint-disable-next-line default-case
  switch (auth.activeNavigator) {
    case "signinSilent":
      return <div>Signing you in...</div>;
    case "signoutRedirect":
      return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <div></div>;
  }

  if (auth.error) {
    return (
      <div>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<FormLogin />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }

  if (
    auth.isAuthenticated ||
    tag_page[1] === "list" ||
    tag_page[1] === "not_public_list" ||
    tag_page[1] === "list_not_found" ||
    Authenticated
  ) {
    return (
      <Router>
        <div>
          <Routes>
            {routes.map(({ Component, path, ...rest }, i) => (
              <Route key={i} path={path} element={<Component />} />
            ))}
            <Route path="/list/:id/film/:id" element={<FilmPage />} />
            <Route path="/list/:id" element={<ListPage />} />
            <Route path="/public/list/:id" element={<PublicList />} />
            <Route path="/not_public_list" element={<NotPublic />} />
            <Route path="/list_not_found" element={<NotFoundList />} />
          </Routes>
        </div>
      </Router>
    );
  }

  // return <WelcomeHome />;
  return <FormLogin />;
}

export default App;
