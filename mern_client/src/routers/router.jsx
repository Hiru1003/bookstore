import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import home from "../home/home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/>
        }
      ]
    },
  ]);

  export default router;