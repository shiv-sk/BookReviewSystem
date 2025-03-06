import {Link} from "react-router-dom";
import { useAuth } from "../context/UserContext";
export default function Header(){
    const {user , logoutUser} = useAuth();
    const handleLogout = async(e)=>{
        e.preventDefault();
        const response = await logoutUser();
        if(response.success){
            console.log();
            alert("logout success");
        }else{
            console.log("logout failed:", response.error);
            alert(response?.error);
        }
    }
    return(
        <div className="navbar bg-base-100 shadow-sm mb-4">
            {
                user ? (
                    <>
                        <div className="navbar-start">
                            <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><Link to={"/allbooks"}>AllBooks</Link></li>
                                <li><Link to={"/profile"}>Profile</Link></li>
                                <li><Link to={"/book/new"}>NewBook</Link></li>
                            </ul>
                            </div>
                            <Link to={"/"} className="btn btn-ghost text-xl">BookReview</Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                            <li><Link to={"/allbooks"}>AllBooks</Link></li>
                            <li><Link to={"/profile"}>Profile</Link></li>
                            <li><Link to={"/book/new"}>NewBook</Link></li>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <button className="btn" onClick={handleLogout}>Logout</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="navbar-start">
                            <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><Link to={"/allbooks"}>AllBooks</Link></li>
                                <li><Link to={"/profile"}>Profile</Link></li>
                                <li><Link to={"/book/new"}>NewBook</Link></li>
                            </ul>
                            </div>
                            <Link to={"/"} className="btn btn-ghost text-xl">BookReview</Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                            <li><Link to={"/allbooks"}>AllBooks</Link></li>
                            <li><Link to={"/profile"}>Profile</Link></li>
                            <li><Link to={"/book/new"}>NewBook</Link></li>
                            </ul>
                        </div>
                        <div className="navbar-end">
                        <Link to={"/register"} className="btn">Login</Link>
                        </div>
                    </>
                )
            }
            
        </div>
    )
}