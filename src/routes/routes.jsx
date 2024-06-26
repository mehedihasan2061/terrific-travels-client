import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ErrorPage from "../shared/ErrorPage/ErrorPage";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyList from "../Pages/MyList/MyList";
import UpdateItem from "../layouts/UpdateItem/UpdateItem";
import AllTouristSpot from "../Pages/AllTouristSpot/AllTouristSpot";
import ViewDetails from "../layouts/ViewDetails/ViewDetails";
import CountryName from "../layouts/CountryName/CountryName";
import AddCountry from "../Pages/AddCountry/AddCountry";
import SpotCountry from "../layouts/SpotCountry/SpotCountry";
import SpotDetails from "../layouts/SpotDetails/SpotDetails";

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
        path: "/allTourist",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () =>
          fetch(
            "https://terrific-travels-server-1kyxzyfu9-mehedihasan2061s-projects.vercel.app/spot"
          ),
      },
      {
        path: "/detail/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://terrific-travels-server-1kyxzyfu9-mehedihasan2061s-projects.vercel.app/spot"
          ),
      },
      {
        path: "/country",
        element: <CountryName></CountryName>,
        loader: () =>
          fetch(
            "https://terrific-travels-server-1kyxzyfu9-mehedihasan2061s-projects.vercel.app/country"
          ),
      },
      {
        path: "/addCountry",
        element: <AddCountry></AddCountry>,
      },

      {
        path: "/spots/:country_name",
        element: (
          <PrivateRoute>
            <SpotCountry></SpotCountry>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://terrific-travels-server-1kyxzyfu9-mehedihasan2061s-projects.vercel.app/spot"
          ),
      },
      {
        path: "/spotDetails/:id",
        element: <SpotDetails></SpotDetails>,
        loader: () =>
          fetch(
            "https://terrific-travels-server-1kyxzyfu9-mehedihasan2061s-projects.vercel.app/spot"
          ),
      },

      {
        path: "/addTouristSpot",
        element: (
          <PrivateRoute>
            <AddTouristSpot></AddTouristSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateItem></UpdateItem>,
        loader: ({ params }) =>
          fetch(
            `https://terrific-travels-server-1kyxzyfu9-mehedihasan2061s-projects.vercel.app/spot/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
