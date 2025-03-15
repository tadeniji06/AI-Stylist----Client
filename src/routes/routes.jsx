import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useAuth } from "../context/Useauth";
import Layout from "../layouts/Layout";

// Screens
import DashBoard from "../screens/DashBoard";
import ForgotPassWord from "../screens/ForgotPassWord";
import ChangePassWord from "../screens/ChangePassWord";
import SignInPage from "../screens/SignInPage";
import SignUpPage from "../screens/SignUpPage";
import OnboardingPage from "../screens/OnboardingPage";
import NotFound from "../screens/NotFound";
import Settings from "../screens/Settings";
import WardRobe from "../screens/WardRobe";
import OutfitSuggestions from "../screens/OutfitSuggestions";
import StyleReccomendation from "../screens/StyleReccomendation";
import WishList from "../screens/WishList";

//private route
const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to='/signin' replace />;
  }

  return <Outlet />;
};

// public route
const PublicRoute = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to='/dashboard' replace />;
  }

  return <Outlet />;
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      // Public routes (accessible only when not logged in)
      {
        element: <PublicRoute />,
        children: [
          {
            path: "/",
            element: <OnboardingPage />,
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
            path: "/forgot-password",
            element: <ForgotPassWord />,
          },
          {
            path: "/change-password",
            element: <ChangePassWord />,
          },
        ],
      },

      // Protected routes (require authentication)
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/dashboard",
            element: <DashBoard />,
          },
          {
            path: "/settings",
            element: <Settings />,
          },
          {
            path: "/wardrobe",
            element: <WardRobe />,
          },
          {
            path: "/outfits",
            element: <OutfitSuggestions />,
          },
          {
            path: "/recommendations",
            element: <StyleReccomendation />,
          },
          {
            path: "/wishlist",
            element: <WishList />,
          },
        ],
      },

      // Routes accessible to all users
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
