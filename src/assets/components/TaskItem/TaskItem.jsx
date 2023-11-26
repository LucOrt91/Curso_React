import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const handleCompleteTask = () => {
    setIsCompleted(!isCompleted);
    onCompleteTask(task.id);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  return (
    <TaskItemWrapper isCompleted={isCompleted}>
      <span>{task.name}</span>
      <div>
        <button onClick={handleCompleteTask}>
          {isCompleted ? 'Desmarcar' : 'Completar'}
        </button>
        <button onClick={handleDeleteTask}>Eliminar</button>
      </div>
    </TaskItemWrapper>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

const TaskItemWrapper = styled.div`
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
`;

export default TaskItem;
