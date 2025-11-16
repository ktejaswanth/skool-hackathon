import "./App.css";
import AllRoutes from "./Router/AllRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingChatButton from "./components/FloatingChatButton";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const restrictedPaths = [
    "/login",
    "/register-user",
    "/admin-login",
    "/admin/admin",
    "/chat"
  ];

  const hideLayout = restrictedPaths.includes(location.pathname);

  return (
    <div>
      {!hideLayout && <Navbar />}

      <div style={{ minHeight: "90vh" }}>
        <AllRoutes />
      </div>

      {!hideLayout && <Footer />}

      {!hideLayout && <FloatingChatButton />} 
    </div>
  );
}

export default App;
