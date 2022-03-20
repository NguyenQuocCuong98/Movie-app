import DetailMovie from "./DetailMovie/DetailMovie";
import Home from "./Home/Home";

export const route = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/detail/:media_type/:id",
    element: DetailMovie,
  },
];
