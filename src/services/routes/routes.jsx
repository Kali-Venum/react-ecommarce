import { createBrowserRouter } from "react-router-dom";

// Pages.
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import ProductsPage from "../../pages/ProductsPage";
import ContactPage from "../../pages/ContactPage";
import NavBar from "../../components/common/NavBar";

const ComponentPasser = (children) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: ComponentPasser(<HomePage />),
  },
  {
    path: "/about",
    element: ComponentPasser(<AboutPage />),
  },
  {
    path: "/products",
    element: ComponentPasser(<ProductsPage />),
  },
  {
    path: "/contact",
    element: ComponentPasser(<ContactPage />),
  },
]);

export default routes;
