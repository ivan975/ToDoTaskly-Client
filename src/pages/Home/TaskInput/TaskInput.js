import React, { useState } from 'react';

const TaskInput = () => {

    const [message, setMessage] = useState('');
    const [updated, setUpdated] = useState('');

    const handleEvent = (event) => {
        setMessage(event.target.value);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setUpdated(message);
            event.preventDefault();
        }
    };

    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form className="flex flex-col">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label for="firstname" className="text-2xl font-bold">My Task</label>
                            <input
                                id="task"
                                type="text"
                                name="task"
                                placeholder="Task"
                                value={message}
                                onChange={handleEvent}
                                onKeyDown={handleKeyDown}
                                className="w-full border-b focus:outline-none border-gray-500 text-gray-900" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </section >
    );
};

export default TaskInput;