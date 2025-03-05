import { Link } from "react-router-dom";
import { useBook } from "../context/BookContrxt";
import { useEffect, useState } from "react";

export default function Home(){
    const {getAllBooks , isLoading} = useBook();
    const [books , setBooks] = useState([]);
    useEffect(()=>{
        const fetchAllBooks = async()=>{
            const response = await getAllBooks();
            if(response.success){
                // console.log("response from allBooks page! " , response?.data);
                setBooks(response?.data);
            }
            else{
                console.log("error from allBooks! " , response?.error);
                alert(response?.error);
            }
        }
        fetchAllBooks();
    } , [])
    return(
        <div className="flex flex-col justify-center items-center gap-4 min-h-screen">
            <div className="flex flex-wrap justify-center gap-4">
                <input type="text" placeholder="Type here" className="input w-48 sm:w-64" />
                <select defaultValue="Pick a color" className="select w-48 sm:w-64">
                    <option disabled={true}>Pick a color</option>
                    <option>Crimson</option>
                    <option>Amber</option>
                    <option>Velvet</option>
                </select>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Search</button>   
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Filter</button>
            </div>   
            <div className="flex flex-wrap justify-center gap-4">
                {
                    isLoading ? <span className="loading loading-dots loading-md"></span> : 
                    books && books.length > 0 ? books.map((book)=>(
                        <div className="card bg-base-100 shadow-sm w-full max-w-sm" key={book._id}>
                            <figure>
                                <img
                                src={book?.coverImage}
                                alt="Book Cover Image" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{book?.title || "book Title"}</h2>
                                <p>{book?.description || "bookDescription"}</p>
                                <div className="card-actions justify-end">
                                <Link to={`book/${book._id}`}><button className="btn btn-primary">More</button></Link>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <p>there no books on server!</p>
                    )
                }
                
            </div>
        </div>

    )
}