import React, { useEffect, useState } from "react";
import { FaList } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import Tabs from "../components/Tabs";
import BoardView from "../components/BoardVeiw";
// import { tasks } from "../assests/data";
import Table from "../components/task/Table";
import { useStateValues } from "../Utils/Provider";
import axios from "axios";


const TABS = [
  { title: "Board View", icon: <MdGridView /> },
  { title: "List View", icon: <FaList /> },
];

// const TASK_TYPE = {
//   todo: "bg-blue-600",
//   "in progress": "bg-yellow-600",
//   completed: "bg-green-600",
// };

const Tasks = () => {
  const params = useParams();
  const [selected, setSelected] = useState(0);
  const [{ user, abc }, dispatch] = useStateValues()
  const [loading, setLoading] = useState(true);
  const status = params?.status || "";
  const [tasks, setTasks] = useState([]);
  if (abc) { console.log(dispatch) }


  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_ENDPOINT}/api/v1/getTodo`, { id: user?._id })
      setTasks(response.data.data);
      setLoading(false);
    }
    fetchData();
  }, [user]);


  if (loading) {
    return (<div className="w-[100vw] h-[90vh] flex justify-center items-center">Loading...</div>)
  }

  return (
    <div className=' mx-auto h-[80vh] overflow-y-scroll mx-auto'>
      <div className='flex w-[90vw]  items-center justify-between mb-4'>
        <h2 className="text-2xl font-semibold capitalize">
          {status ? `${status} Tasks` : "Tasks"}
        </h2>

        {!status && (
          <Link to={'/add-task'}
            className='px-3 py-2 outline-none flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 2xl:py-2.5'>
            <span>"Create Task"</span>
            <IoMdAdd className='text-lg' />
          </Link>
        )}
      </div>

      <Tabs tabs={TABS} selected={selected} setSelected={setSelected}>
        {!status && (
          <div className='w-full flex justify-between gap-4 md:gap-x-12 py-4'>
            <div className='w-full h-10 md:h-12 px-2 md:px-4 rounded bg-white flex items-center justify-between'>
              <p className='text-sm md:text-base text-gray-600'>To Do</p>
              <button className='hidden md:block'>
                <IoMdAdd className='text-lg text-black' />
              </button>
            </div>

            <div className='w-full h-10 md:h-12 px-2 md:px-4 rounded bg-white flex items-center justify-between'>
              <p className='text-sm md:text-base text-gray-600'>In Progress</p>

              <button className='hidden md:block'>
                <IoMdAdd className='text-lg text-black' />
              </button>
            </div>

            <div className='w-full h-10 md:h-12 px-2 md:px-4 rounded bg-white flex items-center justify-between'>
              <p className='text-sm md:text-base text-gray-600'>completed</p>

              <button className='hidden md:block'>
                <IoMdAdd className='text-lg text-black' />
              </button>
            </div>
          </div>
        )}

        {selected !== 1 ? (
          <BoardView tasks={tasks} />
        ) : (
          <div className='w-full'>
            <Table tasks={tasks} />
          </div>
        )}
      </Tabs>

    </div>
  );
};

export default Tasks;