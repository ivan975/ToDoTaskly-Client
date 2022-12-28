import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const TaskInput = () => {

    const [message, setMessage] = useState('');

    const handleEvent = (event) => {
        setMessage(event.target.value);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const tasks = { message: message }
            event.preventDefault();
            fetch('http://localhost:5000/tasks', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(tasks)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        toast.success('Task Added Successfully');
                    }
                })
        }
    };

    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form onKeyDown={handleKeyDown} className="flex flex-col">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-2xl font-bold">My Task</label>
                            <input
                                id="task"
                                type="text"
                                name="task"
                                placeholder="Task"
                                value={message}
                                onChange={handleEvent}
                                className="w-full border-b focus:outline-none border-gray-500 text-gray-900" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </section >
    );
};

export default TaskInput;