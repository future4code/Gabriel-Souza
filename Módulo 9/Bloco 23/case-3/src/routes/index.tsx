import { BrowserRouter, Routes, Route } from "react-router-dom";

//* Pages
import { Home } from "../pages/home";
import { Cadaster } from "../pages/cadaster";
import { Login } from "../pages/login";

export const PagesRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="cadaster" element={<Cadaster />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};