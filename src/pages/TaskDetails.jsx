import React, { useEffect, useState } from "react";
import { FaBug, FaTasks, FaThumbsUp, FaUser } from "react-icons/fa";
import { GrInProgress } from "react-icons/gr";
import { MdOutlineDoneAll, MdOutlineMessage, MdTaskAlt,} from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { tasks } from "../assests/data";
import Tabs from "../components/Tabs";
import Loading from "../components/Loader";
import axios from "axios";

// const assets = [
//   "https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/2534523/pexels-photo-2534523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/804049/pexels-photo-804049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// ];

 const bgColor = {
   high: "bg-red-200",
   medium: "bg-yellow-200",
   low: "bg-blue-200",
 };

const TABS = [
  { title: "Task Detail", icon: <FaTasks /> },
  { title: "Activities", icon: <RxActivityLog /> },
];

const TASKTYPEICON = {
  commented: (
    <div className='w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white'>
      <MdOutlineMessage />,
    </div>
  ),
  started: (
    <div className='w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white'>
      <FaThumbsUp size={20} />
    </div>
  ),
  assigned: (
    <div className='w-6 h-6 flex items-center justify-center rounded-full bg-gray-500 text-white'>
      <FaUser size={14} />
    </div>
  ),
  bug: (
    <div className='text-red-600'>
      <FaBug size={24} />
    </div>
  ),
  completed: (
    <div className='w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white'>
      <MdOutlineDoneAll size={24} />
    </div>
  ),
  "in progress": (
    <div className='w-8 h-8 flex items-center justify-center rounded-full bg-violet-600 text-white'>
      <GrInProgress size={16} />
    </div>
  ),
};

const act_types = [
  "Started",
  "Completed",
  "In Progress",
  "Commented",
  "Bug",
  "Assigned",
];

const TaskDetails = () => {
  const { id } = useParams();
  const [data,setData]= useState(null);

  useEffect((() => {
    async function fetchData() {
      const response = await axios.get(`${process.env.REACT_APP_ENDPOINT}/api/v1/getTodo/${id}`);
      setData(response.data.data);
    }
    fetchData();
  }), [id])

  const [selected, setSelected] = useState(0);
  const task = tasks[3];

  return (
    <div className='w-[90vw] relative h-[75vh] mx-auto flex flex-col gap-3 mb-4 overflow-y-hidden'>
      <h1 className='text-2xl pl-6  text-gray-600 font-bold'>{data?.title}</h1>

      <Tabs tabs={TABS} selected={selected} setSelected={setSelected}>
        {selected === 0 ? (
          <>
            <div className='w-full h-[55vh] flex flex-col md:flex-row gap-3 pt-3 2xl:gap-8 bg-white shadow-md overflow-y-scroll'>
              <div className='w-full md:w-1/2 space-y-4'>
                <div className='flex items-center gap-5'>
                  <div className= {`flex gap-1 items-center text-base font-semibold px-3 py-1 rounded-full ${bgColor[data?.priority]}`} 
                      // PRIOTITYSTYELS[task?.priority],
                      >
                    <span className='uppercase'>{data?.priority}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div
                      className= "w-4 h-4 rounded-full"
                        //  TASK_TYPE[task.stage]
                    />
                    <span className='text-black uppercase'>{data?.stage}</span>
                  </div>
                </div>
                <p className='text-gray-500 px-3'>
                  Created At: {new Date(data?.date).toDateString()}
                </p>
                <div className='flex justify-between items-center p-4 border-y border-gray-200'>
                   <span className='font-semibold'>Sub-Task : {task?.subTasks?.length}</span>
                    <span className="text-[1.5rem] rounded-full border py-[1px] px-[10px] border-gray-500"> + </span>
                </div>
                <div className='space-y-4 py-1  pl-3'>
                  <p className='text-gray-500 font-semibold text-sm'>
                    SUB-TASKS
                  </p>
                  <div className='space-y-8'>
                    {task?.subTasks?.map((el, index) => (
                      <div key={index} className='flex gap-3'>
                        <div className='w-10 h-10 flex items-center justify-center rounded-full bg-violet-50-200'>
                          <MdTaskAlt className='text-violet-600' size={26} />
                        </div>

                        <div className='space-y-1'>
                          <div className='flex gap-2 items-center'>
                            <span className='text-sm text-gray-500'>
                              {new Date(el?.date).toDateString()}
                            </span>

                            <span className='px-2 py-0.5 text-center text-sm rounded-full bg-violet-100 text-violet-700 font-semibold'>
                              {el?.tag}
                            </span>
                          </div>
                          <p className='text-gray-700'>{el?.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className='w-full md:w-1/2 space-y-8'>
                <p className='text-lg font-semibold'>ASSETS</p>

                <div className='w-full grid grid-cols-2 gap-4'>
                  {task?.assets?.map((el, index) => (
                    <img
                      key={index}
                      src={el}
                      alt={task?.title}
                      className='w-full rounded h-28 md:h-36 2xl:h-52 cursor-pointer transition-all duration-700 hover:scale-125 hover:z-50'
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <Activities activity={task?.activities} id={id} />
          </>
        )}
      </Tabs>
    </div>
  );
};

const Activities = ({ activity }) => {
  const [selected, setSelected] = useState(act_types[0]);
  const [text, setText] = useState("");
  const isLoading = false;

  const handleSubmit = async () => { };

  const Card = ({ item }) => {
    return (
      <div className=' flex space-x-4'>
        <div className='flex flex-col items-center flex-shrink-0'>
          <div className='w-10 h-10 flex items-center justify-center'>
            {TASKTYPEICON[item?.type]}
          </div>
          <div className='w-full flex items-center'>
            <div className='w-0.5 bg-gray-300 h-full'></div>
          </div>
        </div>

        <div className='flex flex-col gap-y-1 mb-8'>
          <p className='font-semibold'>{item?.by?.name}</p>
          <div className='text-gray-500 space-y-2'>
            <span className='capitalize'>{item?.type}</span>
            <span className='text-sm'>{(item?.date)}</span>
          </div>
          <div className='text-gray-700'>{item?.activity}</div>
        </div>
      </div>
    );
  };

  return (
    <div className='w-[90vw] mx-auto flex gap-6 2xl:gap-20  px-10 py-8 bg-white shadow-md rounded-md justify-between overflow-y-auto'>
      <div className='w-full md:w-1/2'>
        <h4 className='text-gray-600 font-semibold text-lg mb-5'>Activities</h4>
        <div className='w-full'>
          {activity?.map((el, index) => (
            <Card
              key={index}
              item={el}
              isConnected={index < activity.length - 1}
            />
          ))}
        </div>
      </div>

      <div className='w-full md:w-1/3'>
        <h4 className='text-gray-600 font-semibold text-lg mb-5'>
          Add Activity
        </h4>
        <div className='w-full flex flex-wrap gap-5'>
          {act_types.map((item) => (
            <div key={item} className='flex gap-2 items-center'>
              <input
                type='checkbox'
                className='w-4 h-4'
                checked={selected === item ? true : false}
                onChange={(e) => setSelected(item)}
              />
              <p>{item}</p>
            </div>
          ))}
          <textarea
            rows={10}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Type ......'
            className='bg-white w-full mt-10 border border-gray-300 outline-none p-4 rounded-md focus:ring-2 ring-blue-500'
          ></textarea>
          {isLoading ? (
            <Loading />
          ) : (
            <button
              type='button'
              label='Submit'
              onClick={handleSubmit}
              className='bg-blue-600 text-white rounded'
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default TaskDetails;