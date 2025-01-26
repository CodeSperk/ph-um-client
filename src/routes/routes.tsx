import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { adminRoutes } from "./admin.routes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/admin",
    element: <App/>,
    children: adminRoutes,
  },
  {
    path: "/faculty",
    element: <App/>,
    // children: adminPaths,
  },
  {
    path: "/student",
    element: <App/>,
    // children: adminPaths,
  },
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>
  }
])

export default router;