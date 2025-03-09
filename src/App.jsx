import AppRoutes from "./routes/routes";
import { AuthProvider } from "./context/Useauth";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
};

export default App;
