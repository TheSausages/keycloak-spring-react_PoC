import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/Home";
import Secured from "./components/Secured";
import Public from "./components/Public";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Nav />

              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/secured" element={<PrivateRoute><Secured /></PrivateRoute>} />
                  <Route path="/public" element={<Public />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
