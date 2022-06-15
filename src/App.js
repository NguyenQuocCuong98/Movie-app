import { Route, Routes } from "react-router-dom";
import { login, logout } from "./Redux/user-slice";

import Header from "./components/Layout/Header/Header";
import { auth } from "./firebase/firebase";
import { route } from "./Pages/route";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Log out
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);
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
