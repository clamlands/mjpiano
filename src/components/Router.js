import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Studio from "./Studio";
import Contact from "./Contact";
import Nav from "./Nav/Nav";
import Footer from "./Footer";
import ErrorPage from "./ErrorPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <Nav />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/studio",
          element: <Studio />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
