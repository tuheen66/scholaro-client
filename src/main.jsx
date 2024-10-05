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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        element: <CollegeDetails></CollegeDetails>,
        loader:({params})=>fetch(`http://localhost:5000/college/${params.id}`)
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/my-college",
        element: <MyCollege></MyCollege>,
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
