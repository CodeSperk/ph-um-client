import {Layout, Menu } from 'antd';
import { sideBarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import { Dispatch, SetStateAction } from 'react';
import { facultyPaths } from '../../routes/faculty.routes';
import { adminPaths } from '../../routes/admin.routes';
import { studentPaths } from '../../routes/student.routes';
const { Sider } = Layout;

export type SidebarProps = {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const userRole = {
  Admin : "admin",
  Faculty : "faculty",
  Student : "student",
}


const Sidebar: React.FC<SidebarProps> = ({collapsed, setCollapsed}) => {

const role = "student";

let sidebarItems;
switch(role){
  case userRole.Admin:
    sidebarItems = sideBarItemsGenerator(adminPaths, "admin");
    break;
  case userRole.Faculty:
    sidebarItems = sideBarItemsGenerator(facultyPaths, "faculty");
    break;
  case userRole.Student:
    sidebarItems = sideBarItemsGenerator(studentPaths, "student");
  break;
  default:
    break;

}

  return (
    <Sider
    breakpoint="lg"
    collapsedWidth="0"
    collapsed={collapsed}
    onCollapse={(value) => setCollapsed(value)}
    style={{ position: 'fixed', height: '100vh' }}
  >
    {/* Logo */}
    <div style={{height: "64px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <h1 style={{color:"white", padding: 8, textAlign: "center",}}>PH University</h1>
    </div>
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['Dashboard']} items={sidebarItems} />
  </Sider>
  );
};

export default Sidebar;