import PropTypes from 'prop-types';
import TaskItem from '../TaskItem/TaskItem'; 

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;
