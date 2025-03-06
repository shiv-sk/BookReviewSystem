import { Navigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";

export default function PrivateRoute({children}){
    const {user , isLoading} = useAuth();
    if(isLoading){
        <p>Loading......</p>
    }
    if(!user){
        return <Navigate to={"/login"}/>
    }

    console.log("the user is from privatePage! " , user);
    return children;
}