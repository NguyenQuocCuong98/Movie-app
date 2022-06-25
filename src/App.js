import { Route, Routes } from "react-router-dom";
import { login, logout, selectUser } from "./Redux/user-slice";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Layout/Header/Header";
import { auth } from "./firebase/firebase";
import { route } from "./Pages/route";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(login(authUser));
        return
      } else {
        dispatch(logout())
      }
    })
  },[dispatch]);
  return (
    <>
      <Header />
      <Routes>
        {route.map((movie) => (
          <Route
            key={movie.path}
            path={movie.path}
            element={<movie.element />}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
