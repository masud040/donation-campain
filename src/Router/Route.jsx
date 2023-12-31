import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Details from "../pages/CardDetails/Details";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";

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
        element: <Details></Details>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

export default MyCreatedRoute;
