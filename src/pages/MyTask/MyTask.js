import React from 'react';

const MyTask = () => {
    return (
        <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-100 dark:bg-gray-900">
            <h2 className="mb-3 text-2xl font-semibold leading-tight">My Tasks</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <thead className="rounded-t-lg dark:bg-gray-700">
                        <tr className="">
                            <th title="Number" className="p-3">#</th>
                            <th title="Task name" className="p-3">Name</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="border-b dark:border-gray-700 dark:bg-gray-800">
                            <td className="px-3 py-2">
                                <span>1</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>MIA</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTask;