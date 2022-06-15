import DetailMovie from "./DetailMovie/DetailMovie";
import Home from "./Home/Home";
import LoginPage from "./LoginPage/LoginPage";
import Profile from "./Profile/Profile";
import Register from "./Register/Register";
export const route = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/login",
    element: LoginPage,
  },
  {
    path: "/register",
    element: Register,
  },
  {
    path: "/profile",
    element: Profile,
  },
  {
    path: "/detail/:media_type/:id",
    element: DetailMovie,
  },
];
