import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Mobiles from "./Components/Mobiles/Mobiles.jsx";
import Laptops from "./Components/Laptops/Laptops.jsx";
import Users from "./Components/Users/Users.jsx";
import Users2 from "./Components/Users2/Users2.jsx";
import UserDetails from "./Components/UserDetails/UserDetails.jsx";

const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json()
);

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
      {
        path: "/users",
        Component: Users,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/users-2",
        element: (
          <Suspense fallback={<span>Loading...</span>}>
            <Users2 userPromise={userPromise} />
          </Suspense>
        ),
      },
      {
        path: "users-2/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails />,
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
