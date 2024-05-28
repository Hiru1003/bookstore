import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import Singlebook from "../shop/Singlebook";
import DashboardLayout from "../dashboard/DashboardLayout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/shop",
          element: <Shop/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/blog",
          element: <Blog/>
        },
        {
          path: "/book/:id",
          element: <Singlebook />,
          loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    },
    {
      path: "/admin/dashboard",
      element: <DashboardLayout/>,
    }
  ]);

  export default router;