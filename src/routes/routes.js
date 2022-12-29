import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddTask from "../pages/AddTask/AddTask";
import Home from "../pages/Home/Home/Home";
import Media from "../pages/Media/Media";
import MyTask from "../pages/MyTask/MyTask";
import UpdateTasks from "../pages/UpdateTasks/UpdateTasks";
import ErrorPage from "../shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/myTask',
                element: <MyTask />
            },
            {
                path: '/addTask',
                element: <AddTask />
            },
            {
                path: 'media',
                element: <Media />
            },
            {
                path: '/tasks/edit/:id',
                element: <UpdateTasks />
            },
        ]
    }
])