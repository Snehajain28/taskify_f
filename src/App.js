import { Navigate, Route, Routes } from "react-router-dom";
import { useStateValues } from "./Utils/Provider";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import Trash from "./pages/Trash";
import TaskDetails from "./pages/TaskDetails";
import Login from "./pages/Login";
import { useEffect } from "react";
import Signin from "./pages/Signin";
import AddTask from "./components/task/AddTask";
import Layout from "./Layout";
import { Toaster } from 'react-hot-toast';

function App() {

  const [{ user }, dispatch] = useStateValues();

  useEffect((() => {

    const currentUser = localStorage.getItem("todo_user");

    if (currentUser) {
      dispatch({
        type: "SET_USER",
        user: JSON.parse(currentUser)
      })
      return;
    }
  }), [dispatch])

  if (user === null) {
    return (
      <Routes >
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signin />} />
        <Route path='*' element={<Login />} />
      </Routes >
    )
  }

  return (

    <div className="h-[100vh] overflow-y-hidden w-[100vw]">
      <Toaster />
      <Routes>
        <Route element={<Layout />} >
          <Route index path='/' element={<Navigate to='/dashboard' />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/add-task' element={<AddTask />} />
          <Route path='/completed/:status' element={<Tasks />} />
          <Route path='/in-progress/:status' element={<Tasks />} />
          <Route path='/todo/:status' element={<Tasks />} />
          <Route path='/team' element={<Users />} />
          <Route path='/trashed' element={<Trash />} />
          <Route path='/task/:id' element={<TaskDetails />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
