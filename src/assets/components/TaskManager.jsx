import { useState, useEffect } from 'react';
import TaskForm from './TaskForm/TaskForm';
import TaskList from './TaskList/TaskList';


const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = (taskName) => {
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Administrador de Tareas</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onCompleteTask={completeTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
};

export default TaskManager;
