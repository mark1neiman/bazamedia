import { createBrowserRouter, Outlet, RouterProvider, Navigate } from 'react-router-dom'
import { Home, Login, Profile } from './pages/index'
import { NavBar, LeftBar, RightBar } from './components/index';



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



    const Layout = () => {
        return (
            <>
                <NavBar />
                <div style={{ display: "flex" }}>
                    <LeftBar />
                    <Outlet />
                    <RightBar />
                </div>
            </>
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