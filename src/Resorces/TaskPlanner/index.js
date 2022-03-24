import React, { useEffect, useState } from "react";

const TaskPlanner = () => {
  const [tasks, setTasks] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/v1/task", {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((myJson) => {
        setTasks(myJson);
      });
  }, []);
  return (
    <div>
      {tasks &&
        tasks.map((item, idx) => {
          return (
            <li key={idx}>
              <p>id: {item.id}</p>
              <p>name: {item.name}</p>
              <p>description: {item.description}</p>
              <p>status: {item.status}</p>
              <p>assignedTo: {item.assignedTo}</p>
              <p>dueDate: {item.dueDate}</p>
              <p>created: {item.created}</p>
            </li>
          );
        })}
    </div>
  );
};
export default TaskPlanner;
