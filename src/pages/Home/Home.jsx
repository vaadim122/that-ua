import { Outlet, Link } from "react-router-dom";
import { useOidc } from "@axa-fr/react-oidc";

// import LogiBtn from "../../components/Buttons/LogiBtn";
import Header from "../../components/Header/Header";
import FormLogin from "../../components/Form/FotmLogin";

const Home = () => {
  const { isAuthenticated } = useOidc();
  return (
    <>
      {!isAuthenticated && <FormLogin />}
      {isAuthenticated && (
        <>
          <Header />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/sign-up">Sing Up</Link>
              </li>
              <li>
                <Link to="/sign-in">Sing In</Link>
              </li>
              <li>
                <Link to="/top-list">Top list</Link>
              </li>
              {/* <li>
                <LogiBtn />
              </li> */}
            </ul>
          </nav>
        </>
      )}

      <Outlet />
    </>
  );
};
export default Home;
