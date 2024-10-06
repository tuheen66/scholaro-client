import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home/Home";
import Colleges from "./Pages/Colleges/Colleges";
import Admission from "./Pages/Admission/Admission";
import MyCollege from "./Pages/MyCollege/MyCollege";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./providers/AuthProvider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CollegeDetails from "./Pages/CollegeDetails/CollegeDetails";
import PrivateRoute from "./Routes/PrivateRoute";
import StudentProfile from "./Pages/StudentProfile/StudentProfile";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/college-details/:id",
        element: (
          <PrivateRoute>
            <CollegeDetails></CollegeDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/college/${params.id}`),
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/my-college/:collegeName",
        element: (
          <PrivateRoute>
            <MyCollege></MyCollege>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/my-college/${params.collegeName}`),
      },
      {
        path: "/student-profile/:email",
        element: (
          <PrivateRoute>
            <StudentProfile></StudentProfile>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/colleges/${params.email}`),
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

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
