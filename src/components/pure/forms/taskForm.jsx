import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/level.enum';
import { Task } from '../../../models/Task.class';

const TaskForm = ({ add }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask (e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    return (
        <form onSubmit={addTask} className='d-grid gap-2 d-md-block mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg mb-2' required autoFocus placeholder='Name Task' />
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg mb-2' required placeholder='Description' />
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel' className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                    <option value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>
            </div>
            <div className='d-grid gap-1 mt-2'>
                <button type='submit' className='btn btn-primary btn-lg '>Add</button>
            </div>
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired
};

export default TaskForm;
