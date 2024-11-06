import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Dashboard from "./Components/Dashboard/Dashboard";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import About from "./Components/About/About";
import Statistics from "./Components/Statistics/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ProductDetails/:product_id",
        loader: async ({ params }) => {
          const response = await fetch("/products.json");
          const products = await response.json();
          const product = products.find(
            (p) => p.product_id === params.product_id
          );
          return product || null;
        },
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/Dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
