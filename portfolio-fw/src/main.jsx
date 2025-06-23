import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home/Home";
import ContactForm from "./components/Contact/ContactForm";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      // {
      //   path: "contact",
      //   element: <ContactForm></ContactForm>,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
