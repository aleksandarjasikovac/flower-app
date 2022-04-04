import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import React, { FC } from "react";

const App: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
