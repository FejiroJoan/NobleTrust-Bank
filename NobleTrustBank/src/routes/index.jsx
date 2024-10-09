import HomePage from '../pages/Home/Home';
import Login from '../components/loginforbankapp/Login';
import SignUp from '../components/sign-up/SignUp';
import Dashboard from '../components/Dashboard/Dashboard';
import MyAccount from '../components/HomePage/MyAccountPage';
import GoalSpree from '../components/Savings/savings';
import History1 from '../components/history/History';
// import Settings from '../components'
import Settings1 from '../components/Settings/Settings';
import { createBrowserRouter } from "react-router-dom";
import NewTransfer from '../components/SendMoney/Send';

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/sign-up",
        element: <SignUp />
    },

    // {
    //     path: "/my-account",
    //     element: <MyAccount/>
    // },
    {
        path: "/",
        element: <HomePage />,
        children: [
                {
                    path: "my-account",
                    element: <MyAccount />
                },
        //         {
        //             path: "save", // Removed leading slash
        //             element: <GoalSpree />
        //         },
            ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
                {                      
                    path: "my-account",
                    element: <MyAccount />
                },
                {
                    path: "save", // Removed leading slash
                    element: <GoalSpree />
                },
                {
                    path: "history",
                    element: <History1 />
                },
                {
                    path: "transfer",
                    element: <NewTransfer/>
                },
                {
                    path: "settings",
                    element: <Settings1/>
                },
            ]




        // children: [
        //     {
        //         path: "my-account",
        //         element: <MyAccount />
        //     },
        //     {
        //         path: "save", // Removed leading slash
        //         element: <GoalSpree />
        //     },
        // ]
    },
    {
        path: "/acc",
        element: <MyAccount /> // Consider renaming this to avoid confusion with Dashboard's routes
    },
 

    

]);
