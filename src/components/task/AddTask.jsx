import React, { useState } from "react";
import SelectList from "../SelectList";
// import AddSubTask from "./AddSubTask";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast"
import { useStateValues } from "../../Utils/Provider";

const LISTS = ["TODO", "IN PROGRESS", "COMPLETED"];
const PRIORIRY = ["HIGH", "MEDIUM", "NORMAL", "LOW"];


const AddTask = () => {
  const task = "";
  const [{ user, abc }, dispatch] = useStateValues();
  if (abc) { console.log(dispatch) }
  const [stage, setStage] = useState(task?.stage?.toUpperCase() || LISTS[0]);
  const [priority, setPriority] = useState(
    task?.priority?.toUpperCase() || PRIORIRY[2]
  );
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  })
  const navigate = useNavigate()
  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }


  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_ENDPOINT}/api/v1/createTodo`, { id: user._id, title: formData.title, description: formData.description, date: formData.date, priority: priority, stage: stage })
      .then(() => { toast.success("Task Added") })
      .catch((e) => { toast.error("Task Not Added") })
    navigate('/');
  };


  return (
    <div className=" h-[77vh] mb-2 w-[100vw] mx-auto  overflow-x-hidden w-[100vw] ">
      <form onSubmit={submitHandler} className="w-[90vw] xs:w-[80vw]  mt-2 mx-auto">
        <div className='text-base text-xl font-bold leading-6 text-gray-900 mb-4'
        >
          {task ? "UPDATE TASK" : "ADD TASK"}
        </div>

        <div className='mt-2 flex flex-col gap-5'>
          <div className='w-full flex flex-col gap-1'>
            <label className='text-slate-800'>
              Task Title
            </label>
            <div>
              <input
                type='text'
                name='title'
                value={formData.title}
                onChange={changeHandler}
                placeholder='Task Title'
                className="bg-transparent w-full  rounded-md px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300"
              />
            </div>
          </div>

          <div>
            <p className="text-slate-800">Description</p>
            <textarea
              onChange={changeHandler}
              value={formData.description}
              name="description"
              className="bg-transparent w-full rounded-md px-2.5 py-2 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300 "  ></textarea>
          </div>

          {/*    <AddSubTask /> */}

          <div className='xs:flex justify-between w-[90vw] h-full items-center  gap-3'>
  
            <SelectList
              label='Task Stage'
              lists={LISTS}
              selected={stage}
              setSelected={setStage}
            />
            <div className='flex gap-4 xs:mt-0 xs:mr-[4rem] mt-4'>
              <SelectList
                label='Priority Level'
                lists={PRIORIRY}
                selected={priority}
                setSelected={setPriority}
              />
            </div>
          </div>


          <div className='w-full flex flex-col gap-1'>
            <div>  <label className='text-slate-800'>
              Task Date
            </label>
              <div>
                <input
                  type='date'
                  name='date'
                  value={formData.date}
                  placeholder='Date'
                  onChange={changeHandler}
                  className="bg-transparent w-[9.5rem] px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300"
                />
              </div>
            </div>
          </div>




          <div className='bg-gray-50 py-6 flex sm:flex-row-reverse gap-4'>

            <button
              type='submit'
              className="px-3 py-2 outline-none bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto"
              onClick={() => { }}
            >
              <span>Submit</span>
            </button>

            <Link to={'/'}
              className="px-3 py-2  border border-gray-500 rounded-md outline-none bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto">
              <p>Cancel</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTask;