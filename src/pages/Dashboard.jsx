import { useState, useEffect } from "react";
import { useStateValues } from "../Utils/Provider";
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import axios from "axios";
import TaskCard from "../components/TaskCard";

const Dashboard = () => {

  const [{ user, tasks }, dispatch] = useStateValues()
  const [loading, setLoading] = useState(true);
 
 

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      if (user === null) {
        return;
      }
      await axios.post(`${process.env.REACT_APP_ENDPOINT}/api/v1/getTodo`, { id: user?._id })
        .then((response) => {
         dispatch({
          type:"SET_TASKS",
          tasks:response.data.data
         })
      
          setLoading(false);
        }).catch((e) => { console.log("err") })

    }
    fetchData();
  }, [dispatch,user]);

  if (loading || user === null) {
    return (
      <div> Loading...</div>
    )
  }

  return (
    <div className="relative w-full">
      <div className="flex flex-col items-center px-4 text-gray-700">
        <h1 className="text-center text-2xl font-bold uppercase  lg:mb-10 ">Your Tasks</h1>
        {
          tasks?.length === 0 ?
            (<div className="flex flex-col items-center ">
              <p className="font-semibold">No Todos here ! </p>
              <Link to={'/add-task'} className="text-blue-500">Create New</Link>
            </div>) :
            (<div className=" mt-[1rem] h-[62vh] w-full  overflow-y-auto flex flex-wrap justify-center gap-4">
              {
                tasks.map((idea, i) => (
                  <TaskCard key={i} task={idea} />
                ))
              }
              <hr />
              <h1 className="text-center text-2xl font-bold uppercase  lg:mb-10 ">Completed</h1>
            </div>)
        }
        <Link to={'/add-task'} className="h-[3rem] text-white right-3 w-[3rem] flex justify-center items-center absolute bottom-4  rounded-full bg-blue-500">
          <BiPlus size={30} />
        </Link>
      </div>

    </div>
  );
}

export default Dashboard;
