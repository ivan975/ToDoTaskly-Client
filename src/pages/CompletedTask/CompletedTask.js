import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CompletedTask = () => {
    const [tasks, setTasks] = useState();

    const { data: items = [], refetch } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/tasks')
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = id => {
        const proceed = window.confirm(`Are you sure you want to delete the task?`);
        if (proceed) {
            fetch(`http://localhost:5000/tasks/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.error('Task Deleted')
                        const remaining = tasks.filter(t => t._id !== id)
                        setTasks(remaining);
                        refetch();
                    }
                })
        }
    }
    const navigate = useNavigate();
    const handleNotCompleted = () => {
        navigate('/myTask')
    }

    return (
        <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-100 dark:bg-gray-900">
            <h2 className="mb-3 text-2xl font-semibold leading-tight">My Tasks</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <thead className="rounded-t-lg dark:bg-gray-700">
                        <tr>
                            <th title="Number" className="p-3">#</th>
                            <th title="Task name" className="p-3">Name</th>
                            <th title="Task name" className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            items.map((item, i) =>
                                <tr key={item.i} className="border-b border-black">
                                    <td className="px-3 py-2">
                                        <span>{i + 1}</span>
                                    </td>
                                    <td className="px-3 py-2">
                                        <span>{item.name}</span>
                                    </td>
                                    <td className="px-3 py-2">
                                        <button onClick={() => handleDelete(item._id)} type="button" className="px-3 py-2 font-semibold rounded-full bg-orange-600 text-gray-100 mr-2">Delete</button>
                                        <button onClick={() => handleNotCompleted()} type="button" className="px-3 py-2 font-semibold rounded-full bg-orange-600 text-gray-100 mr-2">Not Completed</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompletedTask;