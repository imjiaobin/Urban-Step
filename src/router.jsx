import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BrandStory from "./pages/BrandStory";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <BrandStory />,
      },
      {
        path: 'products',
        element: <Products />,
      },
    ],
  },
]);

export default router;

