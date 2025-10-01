import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Mobiles from "./Components/Mobiles/Mobiles.jsx";
import Laptops from "./Components/Laptops/Laptops.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/mobiles",
        Component: Mobiles,
      },
      {
        path: "/laptops",
        Component: Laptops,
      },
    ],
  },
  {
    path: "/signup",
    element: <h1>Sign up your account</h1>,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/profile/my-account",
    element: <h1>My Account</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
