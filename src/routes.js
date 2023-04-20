import Callback from "./pages/Callback/Callback";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Unsorted from "./pages/Unsorted/Unsorted";
import FormLogin from "./components/Form/FormLogin.jsx";
import Profile from "./pages/Profiles/Profiles";
import ProfilesPublic from "./pages/ProfilesPublic/ProfilesPublic";
import WelcomeHome from "./pages/WelcomeHome/WelcomeHome";

export default [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/callback",
    Component: Callback,
  },
  {
    path: "/unsorted",
    Component: Unsorted,
  },
  {
    path: "/login",
    Component: FormLogin,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/profiles-piblic",
    Component: ProfilesPublic,
  },
  {
    path: "/signin",
    Component: SignIn,
  },
  {
    path: "/home_log",
    Component: WelcomeHome,
  },
];
