// import {  useState } from "react";
import { FaUser, FaUserLock } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { useStateValues } from "../Utils/Provider";


const UserAvatar = () => {
  const [{ user, profile }, disptach] = useStateValues();

  // const [openPassword, setOpenPassword] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem("todo_user");
    window.location.reload();
  };

  return (
    <div onClick={() => {
      disptach({
        type: "SET_PROFILE",
        profile: (!profile)
      })
    }} className='relative inline-block text-left'>
      <div className='w-10 h-10 2xl:w-12 2xl:h-12 items-center justify-center rounded-full bg-blue-600'>
        <span className='text-white h-full text-lg flex items-center justify-center font-semibold'>
          {user?.name?.[0]}
        </span>
      </div>

      <div>
        {profile &&
          <div className='absolute right-0 h-content mt-2 w-56  divide-gray-100 rounded-md bg-gray-200 shadow-2xl ring-1 ring-black/5 focus:outline-none'>
            <div className='p-4'>
                <button className='text-gray-700  flex w-full items-center rounded-md px-2 py-2 text-base' >
                  <FaUser className='mr-2' />
                  Profile
                </button>
              <div>     
                <button
                  // onClick={() =>{ setOpenPassword(true)}}
                  className={`text-gray-700 group flex w-full items-center rounded-md px-2 py-2 text-base`}
                >
                  <FaUserLock className='mr-2' />
                  Change Password
                </button>
              </div>
              <div>
                <button
                  onClick={logoutHandler}
                  className={`text-red-600 group flex w-full items-center rounded-md px-2 py-2 text-base`}
                >
                  <IoLogOutOutline className='mr-2' />
                  Logout
                </button>

              </div>
            </div>
          </div>
        }

      </div>
    </div>
  );
};

export default UserAvatar;