import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateTasks = () => {
    const router = useParams();
    const { id } = router;
    const navigate = useNavigate();
    const [tasks, setTasks] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/tasks/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setTasks(data.data);
                } else {
                    toast.error(data.error);
                }
            })
            .catch((err) => toast.error(err.message));
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const tasks = {
            name: form.name.value,
        }
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(tasks)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                    navigate("/")
                } else {
                    toast.err(data.error)
                }
            })
            .catch(err => toast.error(err.message))
    }

    return (
        <div className=" text-gray-100 h-screen">
            <div className="w-full max-w-md p-8 mx-auto rounded-xl text-white">
                <h1 className="text-2xl font-bold text-center">Task</h1>
                <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-800 text-start">Task Name</label>
                        <input type="text" name="name" id="name" placeholder="Gaming" className="w-full px-4 py-3 text-black border-b border-gray-700" />
                    </div>
                    {/* <div className="space-y-1 text-sm">
                        <label className="inline-block mb-2 text-gray-800">Upload Image(jpg,png,svg,jpeg)</label>
                        <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                            <div className="flex flex-col items-center justify-center pt-7">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                        clip-rule="evenodd" />
                                </svg>
                                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                    Select a photo</p>
                            </div>
                            <input type="file" className="opacity-0" />
                        </label>
                    </div> */}
                    <button className="mt-5 block w-full p-3 text-center rounded-sm text-gray-900 bg-yellow-400 font-semibold">Submit</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
            </div>
        </div >
    );
};

export default UpdateTasks;