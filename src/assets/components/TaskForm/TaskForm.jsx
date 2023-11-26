import { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ onAddTask }) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleInputChange = (event) => {
    setNewTaskName(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (newTaskName.trim() !== '') {
      onAddTask(newTaskName);
      setNewTaskName('');
    }
  };

  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={newTaskName}
        onChange={handleInputChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

TaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default TaskForm;
