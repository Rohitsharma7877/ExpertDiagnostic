import "./App.css";
import { useLocation } from "react-router-dom";
import Routers from "./components/Routers";
import NavBarPage from "./components/pages/NavBarPage";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();

  // Define the routes where NavBarPage and Footer should not be displayed
  const noHeaderFooterRoutes = [
    "/admin-login",
    "/admin/dashboard",
    "/superadmin/dashboard",
  ];
  // Check if the current route matches any of the specified routes
  const hideHeaderFooter = noHeaderFooterRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <div className="App">
      {!hideHeaderFooter && <NavBarPage />}
      <Routers />
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}
export default App;
