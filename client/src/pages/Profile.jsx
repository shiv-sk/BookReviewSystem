import { useEffect, useState } from "react";
import { useAuth } from "../context/UserContext"
import { Link } from "react-router-dom";

export default function Profile(){
    const {editUser , isLoading , user} = useAuth();
    const [userData , setUserData] = useState({
        name:"",
        email:"",
    });
    const [isDisable , setIsDisable] = useState(true);
    useEffect(()=>{
        if(user){
            setUserData({
                ...userData,
                name:user.name,
                email:user.email
            });
        }
    } , [user]);
    const handleOnChange = (e)=>{
        setUserData({...userData , [e.target.name]:e.target.value})
    }

    const handleOnSubmit = async (e)=>{
        e.preventDefault();
        if(!user){
            return;
        }
        const response = await editUser(userData , user?._id);
        if(response.success){
            console.log("Edit", response?.data);
            alert("Edit user is success");
        }else{
            console.log("Edit user is failed:", response?.error);
            alert(response?.error);
        }
    }
    const handleEdit = (e)=>{
        e.preventDefault();
        setIsDisable((prev)=>!prev);
        alert("click on confirm button to edit info");
    }
    return(
        <div className="flex flex-col justify-center items-center min-h-screen gap-4">
            <div className="max-w-sm w-full bg-base-100 p-6 rounded-lg shadow-md">
                <h1 className="text-center font-bold text-2xl mb-1.5">Profile</h1>
                <div className="">
                    <form className="flex flex-col gap-4">
                    <label htmlFor="email" className="text-sm font-medium mb-1">Email</label>    
                    <input
                    name="email" 
                    type="email"
                    id="email" 
                    placeholder="exp@email.com" 
                    className="input w-full"
                    value={userData?.email}
                    onChange={handleOnChange}
                    disabled={isDisable}
                    required
                    />
                    <label htmlFor="name" className="text-sm font-medium mb-1">name</label>
                    <input
                    name="name" 
                    type="name"
                    id="name" 
                    placeholder="username" 
                    className="input w-full"
                    value={userData?.name}
                    onChange={handleOnChange}
                    disabled={isDisable}
                    required/>
                    <p> Changed Mind? <Link to={"/"}>
                    <span className="hover:border-b-2 hover:text-blue-500">Home</span></Link></p>
                    <button type="submit" 
                    className="btn w-full" 
                    disabled={isLoading}
                    onClick={handleEdit}
                    >{isLoading ? "Processing..." : "Edit"}</button>
                    {
                        !isDisable && (
                            <button onClick={handleOnSubmit} className="btn w-full" disabled={isLoading}>
                            {isLoading ? "Processing..." : "confirm"}</button>
                        )
                    }
                    </form>
                </div>
            </div>
        </div>
    )
}