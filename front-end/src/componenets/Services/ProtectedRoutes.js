import { Navigate, Outlet, Route } from "react-router-dom";



const useAuth = () => {
    const token = localStorage.getname('user');
    // console.log(token)
    // const user = { login: false };
    return token && token.length != 0;

}

const ProtectedRoute = () => {
    const isAuth = useAuth();

    return (
        <>
            {isAuth ? <Outlet /> : <Navigate to="/Home" />}
        </>
    )
}
export default ProtectedRoute;