import { useState, useEffect } from "react";
import { useStateValues } from "../Utils/Provider";
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import axios from "axios";
import TaskCard from "../components/TaskCard";

const Dashboard = () => {

  const [ideas, setIdeas] = useState([]);
  const [{ user, abc }, dispatch] = useStateValues()
  const [loading, setLoading] = useState(true);

  if (abc) { console.log(dispatch) }
  // const handleDelete = (id) => {

  //   const ideasCopy = [...ideas];
  //   const ideasCopyUpdated = ideasCopy.filter(idea => idea.id !== id);
  //   console.log(id)
  //   setIdeas(ideasCopyUpdated);
  // }

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      if (user === null) {
        return;
      }

      await axios.post(`${process.env.REACT_APP_ENDPOINT}/api/v1/getTodo`, { id: user?._id })
        .then((response) => {
          setIdeas(response.data.data);
          setLoading(false);
        }).catch((e) => {console.log("err")})

    }
    fetchData();
  }, [user]);

  if (loading || user === null) {
    return (
      <div> Loading...</div>
    )
  }

  return (
    <div className="relative w-full">
      <div className="flex flex-col items-center px-4 text-gray-700">
        <h1 className="text-center text-2xl font-bold uppercase mb-10">Your Tasks</h1>
        {
          ideas?.length === 0 ?
            (<div className="flex flex-col items-center ">
              <p className="font-semibold">No Todos here ! </p>
              <Link to={'/add-task'} className="text-blue-500">Create New</Link>
            </div>) :
            (<div className="w-[90vw] justify-center flex flex-wrap gap-7">
              {
                ideas.map((idea , i) => (
                  <TaskCard key={i} task={idea} />
                ))
              }
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
