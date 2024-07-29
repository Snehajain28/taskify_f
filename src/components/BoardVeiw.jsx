import React from "react";
import TaskCard from "./TaskCard";

const BoardView = ({ tasks }) => {
  return (
      <div className="w-[90vw] h-[50vh] pb-10 gap-8 flex flex-wrap  justify-center mx-auto">
        {tasks.map((task, index) => (
          <TaskCard task={task} key={index} />
        ))}
    </div>
  );
};

export default BoardView;