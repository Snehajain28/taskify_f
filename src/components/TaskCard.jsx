import React from "react";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import axios from "axios";
import toast from "react-hot-toast"
import { useStateValues } from "../Utils/Provider";

const TaskCard = ({ task }) => {
  const [{ tasks }, dispatch] = useStateValues()



  const handleDelete = async () => {
    await axios.delete(`${process.env.REACT_APP_ENDPOINT}/api/v1/deleteTodo/${task._id}`)
      .then(() => {
        toast.success(" Deleted");
        let i = tasks.indexOf(task._id);
        tasks.splice(i, 1);
        dispatch({
          type: "SET_TASKS",
          tasks:tasks
        })
      }
      )
      .catch((e) => { })
  }

  const handleCom = () => {

  }

  if (task == null) {
    return <div></div>
  }

  return (
    <div className='w-[15rem] h-[10rem] border-[1px]  bg-white shadow-md p-4 rounded-md'>
      <div className="flex justify-between items-center">
        <Link to='/task._id' className='line-clamp-1   text-center font-bold text-black'>{task?.title}</Link>
        <div className="flex gap-3 text-[1.3rem]">
          <button onClick={handleDelete} className="hover:text-red-500">
            <MdDeleteOutline />
          </button>
          <button onClick={handleCom}>
            <TiTickOutline className="hover:text-green-500" />
          </button>
        </div>
      </div>
      <div className="border border-[1px] border-gray-200 my-2" />
      <p className="px-2 py-1">{task.description}</p>
      <div className="flex flex-1 justify-between mt-6 gap-1 items-center text-sm font-medium">
        <span className='uppercase border rounded-full border-gray-500 px-2 py-1'>{task?.stage} </span>
        <span className='uppercase border rounded-full border-gray-500 px-2 py-1'>{task?.priority} </span>
      </div>
      {/* <AddSubTask open={open} setOpen={setOpen} id={task?._id} /> */}

    </div>


  );
};

export default TaskCard;