import { Outlet, Link } from "react-router-dom";
import InstaBtn from "../../components/Buttons/InstaBtn";
import InstagramBtn from "../../components/Buttons/InstagramBtn";
import LogiBtn from "../../components/Buttons/LogiBtn";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
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
          <li>
            <InstagramBtn />
          </li>
          <li>
            <InstaBtn />
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
export default Home;
