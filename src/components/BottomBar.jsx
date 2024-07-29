import { BiTask } from "react-icons/bi";
import { FaHome,FaPlus, FaSave } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export const bottombarLinks = [
  {
    icon: <FaHome />,
    route: "/",
    label: "Home",
  },
  {
    icon: <BiTask/>,
    route: "/tasks",
    label: "Tasks",
  },
  {
    icon: <FaPlus />,
    route: "/add-task",
    label: "Add",
  },
  {
    icon: <FaSave />,
    route: "/saved",
    label: "Saved",
  },
 
];

const Bottombar = () => {
  const { pathname } = useLocation();

  return (
    <section className="z-50 pointer-cursor flex justify-between w-full sticky bottom-0 rounded-t-[20px] bg-[#09090A]  px-5 py-2 md:hidden">
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link
            key={`bottombar-${link.label}`}
            to={link.route}
            className={`${isActive && "rounded-[10px] bg-[#877EFF] "
              } flex   items-center flex-col gap-1  p-2 transition`}>

            <div className="text-white">{link.icon}</div>
            <p className="text-[10px] font-medium leading-[140%] text-[#EFEFEF]">{link.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;