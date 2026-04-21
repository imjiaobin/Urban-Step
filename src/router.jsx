import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import BrandStory from "./pages/BrandStory";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'brandstory',
        element: <BrandStory />,
      },
      
    ],
  },
]);

export default router;

