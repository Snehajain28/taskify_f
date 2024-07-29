import { Outlet } from "react-router-dom";
import Bottombar from "./components/BottomBar";
import Navbar from "./components/NavBar";
// import Sidebar from "./components/SideBar";

const Layout = () => {
  return (
    <div className="w-[100vw] h-[100vh] ">
      <Navbar />
      {/* <Sidebar/> */}
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <Bottombar />
    </div>
  );
};

export default Layout;