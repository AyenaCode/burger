import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePAge } from "./pages/HomePAge";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePAge />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
