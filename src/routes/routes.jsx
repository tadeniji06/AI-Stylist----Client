import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import DashBoard from "../screens/DashBoard";
import ForgotPassWord from "../screens/ForgotPassWord";
import ChangePassWord from "../screens/ChangePassWord";
import SignInPage from "../screens/SignInPage";
import SignUpPage from "../screens/SignUpPage";
import OnboardingPage from "../screens/OnboardingPage";
import NotFound from "../screens/NotFound";

const router = createBrowserRouter([
  {
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <OnboardingPage />,
      },
    
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
       path: "/signup",
       element: <SignUpPage />,
      },
      {
        path: "/change password",
        element: <ChangePassWord />,
      },

      {
        path: "/forgot password",
        element: <ForgotPassWord />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
