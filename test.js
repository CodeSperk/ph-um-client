const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "AdminDashboard ",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CreateAdmin",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "Createfaculty",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CreateStudent ",
      },
    ],
  },
];

const newArray = adminPaths.reduce((acc, item) => {
  if(item.path && item.name) {
   acc.push({
    key: item.name,
    label: item.name,
   })
  }
  if(item.children){
    acc.push({
      key: item.name,
      label:item.name,
      children: item.children.map(child => ({
        key: child.name,
        lable: child.name,   
    }))
    })
  }
  console.log(acc);
  return acc;
}, [])
