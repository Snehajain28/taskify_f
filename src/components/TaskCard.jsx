import React from "react";
import { Link } from "react-router-dom";

const TaskCard = ({ task }) => {

  return (
    <Link to={`/task/${task._id}`}>
      <div className='w-[15rem] h-[10rem] border-[1px]  bg-white shadow-md p-4 rounded-md'>
        <h4 className='line-clamp-1   text-center font-bold text-black'>{task?.title}</h4>
        <div className="border border-[1px] border-gray-200 my-2" />
        <p className="px-2 py-1">{task.description}</p>
        <div className="flex flex-1 justify-between mt-6 gap-1 items-center text-sm font-medium">
        <span className='uppercase border rounded-full border-gray-500 px-2 py-1'>{task?.stage} </span>
          <span className='uppercase border rounded-full border-gray-500 px-2 py-1'>{task?.priority} </span>
        </div>
    
      </div>

      {/* <AddSubTask open={open} setOpen={setOpen} id={task?._id} /> */}
    </Link>
  );
};

export default TaskCard;