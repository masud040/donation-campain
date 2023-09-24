import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";

const MyCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
      },
    ],
  },
]);

export default MyCreatedRoute;
