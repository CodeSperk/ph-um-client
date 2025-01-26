import CreateAdmin from "../pages/Admin/CreateAdmin/CreateAdmin";
import Createfaculty from "../pages/Admin/CreateFacutly/Createfaculty";
import CreateStudent from "../pages/Admin/CreateStudent/CreateStudent";
import AdminDashboard from "../pages/Admin/Dashboard/AdminDashboard";
import CreateModerator from "../pages/Admin/CreateModerator/CreateModerator";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <Createfaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Moderator",
        path: "create-moderator",
        element: <CreateModerator />,
      },
    ],
  },
];