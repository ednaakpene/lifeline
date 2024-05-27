import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import "./index.css";
import Landing from "./pages/landingpage/Landing";
import Products from "./components/products/products";
import Serve from "./components/serv/Serve";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/products", element: <Products /> },
    { path: "/services", element: <Serve /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
