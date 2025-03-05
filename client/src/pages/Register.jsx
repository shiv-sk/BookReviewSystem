import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/UserContext";

export default function Register(){
    const {registerUser , isLoading} = useAuth();
    const [registerData , setRegisterData] = useState({
        name:"",
        email:"",
        password:""
    });
    const handleOnChange = (e)=>{
        setRegisterData({...registerData , [e.target.name]:e.target.value})
    }
    const handleRegister = async (e)=>{
        e.preventDefault();
        const response = await registerUser(registerData);
        if(response.success){
            console.log("Registration successful!", response.data);
            alert("register Success")
        }else{
            console.log("Registration failed:", response.error);
            alert(response?.error);
        }
    }
    return(
        <div className="flex flex-col justify-center items-center min-h-screen gap-4">
            <div className="max-w-sm w-full bg-base-100 p-6 rounded-lg shadow-md">
                <h1 className="text-center font-bold text-2xl mb-1.5">Register</h1>
                <div className="">
                    <form className="flex flex-col gap-4" onSubmit={handleRegister}>
                    <label htmlFor="name" className="text-sm font-medium mb-1">Name</label>    
                    <input
                    name="name"
                    id="name" 
                    type="text" 
                    placeholder="Enter your name" 
                    className="input w-full"
                    value={registerData.name}
                    onChange={handleOnChange} 
                    required
                    />
                    <label htmlFor="email" className="text-sm font-medium mb-1">Email</label>
                    <input
                    name="email" 
                    type="email"
                    id="email" 
                    placeholder="exp@email.com" 
                    className="input w-full"
                    value={registerData.email}
                    onChange={handleOnChange} 
                    required
                    />
                    <label htmlFor="password" className="text-sm font-medium mb-1">password</label>
                    <input
                    name="password" 
                    type="password"
                    id="password" 
                    placeholder="pass@123" 
                    className="input w-full"
                    value={registerData.password}
                    onChange={handleOnChange} 
                    required
                    />
                    <p>Already have an account <Link to={"/login"}>
                    <span className="hover:border-b-2 hover:text-blue-500">Login</span></Link></p>
                    <button className="btn w-full" type="submit" disabled={isLoading}>{isLoading ? "Processing..." : "Register"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}