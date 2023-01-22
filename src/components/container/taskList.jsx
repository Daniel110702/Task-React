import React, { useState, useEffect } from 'react';
// import { LEVELS } from '../../models/level.enum';
// import { Task } from '../../models/Task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/TaskComponent';

const TaskList = () => {

    // const defaultTask1 = new Task('example', 'description', true, LEVELS.NORMAL);
    // const defaultTask2 = new Task('example2', 'description', false, LEVELS.URGENT);
    // const defaultTask3 = new Task('example3', 'description', true, LEVELS.BLOCKING);

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        console.log('Taks state has been modified');
        return () => {
            console.log('TaskList component is going to unmount');
        };
    }, [tasks]);

    function completeTask (task) {
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        setTasks(tempTask);
    }

    function removeTask (task) {
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);
    }

    function addTask (task) {
        const index = tasks.indexOf(task); // eslint-disable-line
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }

    return (
        <div>
            <div className='col-12 d-flex justify-content-center mt-5'>
                <div className='card '>
                    <div className='card-header p-3'>
                        <h5>Your Task:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar= 'true' style={ { position: 'relative', height: '400px' } }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tasks.map((task, index) => {
                                    return (
                                        <TaskComponent key={index} task={task} complete={completeTask} remove={removeTask} />
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <TaskForm add={addTask} />
                </div>
            </div>
        </div>
    );
}

export default TaskList;
