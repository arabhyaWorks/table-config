import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Projects } from "./pages/Projects";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
