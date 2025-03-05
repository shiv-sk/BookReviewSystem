import { useParams } from "react-router-dom"
import { useBook } from "../context/BookContrxt";
import { useEffect, useState } from "react";

export default function BookDetail(){
    const {bookId} = useParams();
    const {getBook , isLoading} = useBook();
    const [book , setBook] = useState(null);

    useEffect(()=>{
        const fetchBook = async()=>{
            const response = await getBook(bookId);
            if(response.success){
                // console.log("response from allBooks page! " , response?.data);
                setBook(response?.data);
            }else{
                console.log("error from allBooks! " , response?.error);
                alert(response?.error);
            }
        }
        fetchBook();
    } , [])
    return(
        <div className="flex flex-col gap-6 p-4">
        <div className="flex flex-col md:flex-row gap-6">
            {
                isLoading ? <span className="loading loading-dots loading-md"></span> :
                book ? (
                    <>
                        <div className="w-full md:w-1/3">
                            <img src={book?.coverImage}
                            alt="book-CoverImage"
                            className="w-full rounded-lg shadow-lg"></img>
                        </div>
                        <div className="w-full md:w-2/3 shadow-md p-4">
                            <h1 className="text-2xl font-bold mb-2">{book?.title || "Book-Title"}</h1>
                            <h4 className="text-lg text-gray-600 mb-4">{book.author || "Book-Author"}</h4>
                            <p className="text-gray-700 mb-4">
                                {book.description || "Book-Description"}
                            </p>
                            <p className="text-gray-600 mb-2"><strong>Genre:</strong> {book.genre || "Book-Genre"}</p>
                            <p className="text-gray-600 mb-2"><strong>Published:</strong>{book.publishedYear || "Book-publishedYear"}</p>
                            <p className="text-gray-600"><strong>Average Rating:</strong> 4.2/5</p>
                        </div>
                    </>
                ) : <p>Book not found!...</p>
            }
            
        </div>
        <div className="bg-gray-900 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Write a Review</h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <textarea 
        className="textarea w-full sm:w-2/3 p-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Bio"></textarea>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-1/3 h-12 mb-7">
        <select
                className="w-full sm:w-1/2 p-2 border rounded focus:outline-none bg-gray-900 focus:border-blue-500 h-full"
            >
                <option disabled>Select rating</option>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
            
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 h-full"
        >
            Submit
        </button>
        </div>
            
        </div>
            <div className="card bg-base-100 shadow p-4 mt-8">
            <div className="flex gap-3 mb-2">
              <img
                src="https://i.pravatar.cc/42"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">Sophia Lee</p>
                <p className="text-xs text-gray-500">Feb 16, 2025 at 5:00 PM</p>
              </div>
            </div>
            <p>
              Hooks have been a game changer for me. Thanks for breaking them down so clearly!
            </p>
          </div>
        </div>
        
        </div>
    )
}