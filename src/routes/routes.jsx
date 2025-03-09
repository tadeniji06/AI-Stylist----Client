import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useAuth } from "../context/Useauth";
import Layout from "../layouts/Layout";
import DashBoard from "../screens/DashBoard";
import ForgotPassWord from "../screens/ForgotPassWord";
import ChangePassWord from "../screens/ChangePassWord";
import SignInPage from "../screens/SignInPage";
import SignUpPage from "../screens/SignUpPage";
import OnboardingPage from "../screens/OnboardingPage";
import NotFound from "../screens/NotFound";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to='/signin' />;
};

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? children : <Navigate to='/dashboard' />;
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <PublicRoute>
            <OnboardingPage />
          </PublicRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/signin",
        element: (
          <PublicRoute>
            <SignInPage />
          </PublicRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <PublicRoute>
            <SignUpPage />
          </PublicRoute>
        ),
      },
      {
        path: "/change password",
        element: (
          <PublicRoute>
            <ChangePassWord />
          </PublicRoute>
        ),
      },
      {
        path: "/forgot password",
        element: (
          <PublicRoute>
            <ForgotPassWord />
          </PublicRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
