import { createBrowserRouter, Outlet, RouterProvider, Navigate } from 'react-router-dom'
import { Home, Login, Profile } from './pages/index'
import { NavBar, LeftBar, RightBar } from './components/index';
import "./style.scss"
import { useContext } from 'react';
import { DarkModeContext } from "./context/darkMode";


const App = () => {

    const isSinginUser = true; // TODO later fetch backend 

    const ProtectedSignin = ({ children }) => {
        if (!isSinginUser) {
            return (
                <Navigate to="/login" />
            )
        }
        return children;
    }

    const { darkMode } = useContext(DarkModeContext);

    const Layout = () => {
        return (
            <div className={`theme-${darkMode ? "dark" : "light"}`}>
                <NavBar />
                <div style={{ display: "flex" }}>
                    <LeftBar />
                    <div style={{ flex: "6" }}>
                        <Outlet />
                    </div>
                    <RightBar />
                </div>
            </div>
        )
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element:
                <ProtectedSignin>
                    <Layout />
                </ProtectedSignin>
            ,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/profile/:id',
                    element: <Profile />,
                },
            ]
        },
        {
            path: '/login',
            element: <Login />
        }
    ])

    return (
        <div>
            <RouterProvider router={router} />

        </div>
    )
}

export default App