import Topbar from "./component/Topbar/Topbar";
import Write from "./pages/write/Write";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import DataProvider from "./contexts/DataProvider";
import { useEffect, useState } from "react";
import blogs_services from "./services/blogs_services";
import axios from "axios";

const Layout = () => {
  axios.defaults.baseURL = "https://kapilblogs.vercel.app/api/";
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
};

function App() {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const alreadyLoginUser = JSON.parse(
      window.localStorage.getItem("loggedInUser")
    );
    if (alreadyLoginUser) {
      setUser(alreadyLoginUser);
    }
    const fetchData = async () => {
      const blog_data = await blogs_services.getAllBlog();
      setBlogs(blog_data);
    };
    fetchData();
  }, []);
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
          path: "post/:id",
          element: <Single />,
        },
        {
          path: "/settings/:id",
          element: user ? <Settings /> : <Login />,
        },
      ],
    },
  ]);
  return (
    <DataProvider.Provider value={{ user, setUser, blogs, setBlogs }}>
      <RouterProvider router={router} />
    </DataProvider.Provider>
  );
}

export default App;
