import { Route, Routes } from "react-router-dom";

import Header from "./components/Layout/Header/Header";
import { route } from "./Pages/route";

function App() {
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
