import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            {routes.map(({ Component, path, ...rest }, i) => (
              <Route
                // exact={true}
                key={i}
                path={path}
                element={<Component />}
              />
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
