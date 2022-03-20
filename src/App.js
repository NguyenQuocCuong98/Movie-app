import { Route, Routes } from "react-router-dom";

import { route } from "./Pages/route";

function App() {
  return (
    <>
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
