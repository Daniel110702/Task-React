import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/Task.class';
import { LEVELS } from '../../models/level.enum';


const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Created Task');
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);

    function taskLevelBadge () {
        switch (task.level) {
            case LEVELS.NORMAL :
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                );
            case LEVELS.URGENT : 
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                );
            case LEVELS.BLOCKING :
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                );

            default :
            break;
        }
    }

    function taskCompletedIcon () {
        if (task.completed) {
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={ { color: 'green', cursor: 'pointer' } }></i>);
        } else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={ { color: 'gray', cursor: 'pointer' } }></i>);
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'> {task.name} </span>
            </th>
            <td className='align-middle'>
                <span> {task.description} </span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {taskCompletedIcon()}
                <i onClick={() => remove(task)} className='bi-trash task-action' style={ { color: 'tomato', cursor: 'pointer' } }></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
