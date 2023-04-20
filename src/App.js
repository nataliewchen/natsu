import React, { useState, useEffect } from "react";
import commerce from "./lib/commerce";
import Navbar from "./components/Navbar.tsx";
import { Outlet } from "react-router-dom";

import "./styles/App.css";

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
