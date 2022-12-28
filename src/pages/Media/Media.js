import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Media = () => {

    const { data: items = [] } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/addTasks')
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-100 dark:bg-gray-900">
            <h2 className="mb-3 text-2xl font-semibold leading-tight">Added Tasks</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <thead className="rounded-t-lg dark:bg-gray-700">
                        <tr>
                            <th title="Number" className="p-3">#</th>
                            <th title="Task name" className="p-3">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, i) =>
                                <tr key={item.i} className="border-b dark:border-gray-700 dark:bg-gray-800">
                                    <td className="px-3 py-2">
                                        <span>{i + 1}</span>
                                    </td>
                                    <td className="px-3 py-2">
                                        <span>{item.name}</span>
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

export default Media;