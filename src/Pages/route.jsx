import DetailMovie from "./DetailMovie/DetailMovie";
import Home from "./Home/Home";
import LoginPage from "./LoginPage/LoginPage";
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
    path: "/detail/:media_type/:id",
    element: DetailMovie,
  },
];
