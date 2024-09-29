import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Details from "./pages/Details/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/user-management-app",
    element: <App />,
    children: [
      {
        path: "/user-management-app/",
        element: <Home />,
      },
      {
        path: "/user-management-app/user-details/:userId",
        element: <Details />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
