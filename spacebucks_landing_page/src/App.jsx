// App.jsx
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import LoanPage from "./pages/LoanPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoanPage />} />
      </Routes>
    </HashRouter>
  );
}
