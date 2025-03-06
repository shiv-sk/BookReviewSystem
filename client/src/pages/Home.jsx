import { useEffect, useState } from "react";
import { useBook } from "../context/BookContrxt"
import { Link } from "react-router-dom";

export default function Home(){
    const {getNewlyAddedBooks , getPopularBooks} = useBook();
    const [popularBooks , setPopularBooks] = useState([]);
    const [newlyAddedBooks , setNewlyAddedBooks] = useState([]);
    useEffect(()=>{
        const fetchPopularBooks = async()=>{
            const response = await getPopularBooks();
            // console.log("response from getPopularBooks! " , response?.data);
            setPopularBooks(response?.data || []);
        }
        fetchPopularBooks();
    } , [])
    useEffect(()=>{
        const fetchNewlyAddedBooks = async()=>{
            const response = await getNewlyAddedBooks();
            // console.log("response from getNewlyAddedBooks! " , response?.data);
            setNewlyAddedBooks(response?.data || []);
        }
        fetchNewlyAddedBooks();
    } , [])
    return(
        <div className="flex justify-center flex-col gap-5 items-center">
            <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-3xl font-bold">Most Popular Books</h1>
            
            <div className="carousel carousel-center bg-base-300 rounded-box w-full sm:w-3/4 lg:w-1/2 p-4 gap-4">
            {
                popularBooks && popularBooks.length > 0 ? popularBooks.map((book)=>(
                    <div className="carousel-item" key={book._id}>
                        <div className="card bg-base-100 shadow-sm w-full sm:w-80 md:w-96">
                            <figure>
                                <img
                                src={book?.coverImage || "bookCoverImage"}
                                alt="Shoes" 
                                className="w-full h-48 object-cover"/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{book?.title || "bookTitle"}</h2>
                                <p>{book.description || "bookDescription"}</p>
                                <div className="card-actions justify-end">
                                <Link to={`/book/${book._id}`}><button className="btn btn-primary">More</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : ""
            }
                
            </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-3xl font-bold">New Added Books</h1>
            
            <div className="carousel carousel-center bg-base-300 rounded-box w-full sm:w-3/4 lg:w-1/2 p-4 gap-4">
            {
                newlyAddedBooks && newlyAddedBooks.length > 0 ? newlyAddedBooks.map((book)=>(
                    <div className="carousel-item" key={book._id}>
                        <div className="card bg-base-100 shadow-sm w-full sm:w-80 md:w-96">
                            <figure>
                                <img
                                src={book?.coverImage || "bookCoverImage"}
                                alt="Shoes" 
                                className="w-full h-48 object-cover"/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{book?.title || "bookTitle"}</h2>
                                <p>{book?.description || "bookDescription"}</p>
                                <div className="card-actions justify-end">
                                <Link to={`/book/${book._id}`}><button className="btn btn-primary">More</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : ""
            }
                
            </div>
            </div>
            
        </div>
    )
}