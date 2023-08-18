import Topbar from "./component/Topbar/Topbar";
import Write from "./pages/write/Write";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
};

function App() {
  const user = false;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/write",
          element: user ? <Write /> : <Login />,
        },
        {
          path: "/register",
          element: user ? <Home /> : <Register />,
        },
        {
          path: "/login",
          element: user ? <Home /> : <Login />,
        },
        {
          path: "/:id",
          element: <Single />,
        },
        {
          path: "/settings",
          element: user ? <Settings /> : <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;