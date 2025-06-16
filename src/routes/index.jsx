import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AnunciosPage from "../pages/AnunciosPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/anuncios",
    element: <AnunciosPage />
  }
]);

export default router;
