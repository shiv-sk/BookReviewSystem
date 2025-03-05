import { Link } from "react-router-dom";
import { useState } from "react";
import { useBook } from "../context/BookContrxt";

export default function NewBook(){
    const {addBook , isLoading } = useBook();
    const [bookData , setBookData] = useState({
        title:"",
        author:"",
        genre:"",
        publishedYear:1111,
        description:"",
        coverImage:null,
    });
    const handleOnChnage = (e)=>{
        if(e.target.name !== "coverImage"){
            setBookData({...bookData , [e.target.name]:e.target.value});
        }
        else{
            setBookData({...bookData , coverImage:e.target.files[0]});
        }
    }
    const handleAddBook = async (e)=>{
        e.preventDefault();
            try {
                const formData = new FormData();
                formData.append("title", bookData.title);
                formData.append("coverImage", bookData.coverImage);
                formData.append("description", bookData.description);
                formData.append("genre" , bookData.genre);
                formData.append("author" , bookData.author);
                formData.append("publishedYear" , bookData.publishedYear);
                console.log("Submitting with author:", bookData.author);
                const response = await addBook(formData);
                if(response.success){
                    console.log("Book Added successful!", response.data);
                    alert("new book added!");
                    setBookData({
                        title: "",
                        author: "",
                        genre: "",
                        publishedYear: 1111,
                        description: "",
                        coverImage: null,
                    })
                }
                else{
                    console.log("Book Add is failed:", response.error);
                    alert(response?.error);
                }
            } catch (error) {
                console.log("Error from handleAddBook:", error);
            }
    }
    return(
        <div className="flex flex-col justify-center items-center min-h-screen gap-4">
            <div className="max-w-sm w-full bg-base-100 p-6 rounded-lg shadow-md">
                <h1 className="text-center font-bold text-2xl mb-1.5">Add New Book</h1>
                <div className="">
                    <form className="flex flex-col gap-4" onSubmit={handleAddBook}>
                    <label htmlFor="title" className="text-sm font-medium mb-1">Book Title</label>    
                    <input
                    name="title"
                    id="title" 
                    type="text" 
                    placeholder="The Great Gatsby" 
                    className="input w-full"
                    value={bookData.title}
                    onChange={handleOnChnage} 
                    required
                    />
                    <label htmlFor="author" className="text-sm font-medium mb-1">Book Author</label>
                    <input
                    name="author"
                    id="author" 
                    type="text" 
                    placeholder="F. Scott Fitzgerald" 
                    className="input w-full"
                    value={bookData.author}
                    onChange={handleOnChnage} 
                    required
                    />
                    <label htmlFor="genre" className="text-sm font-medium mb-1">Book Genre</label>
                    <input
                    name="genre" 
                    type="text"
                    id="genre" 
                    placeholder="novel" 
                    className="input w-full"
                    value={bookData.genre}
                    onChange={handleOnChnage} 
                    required
                    />
                    <label htmlFor="publishedYear" className="text-sm font-medium mb-1">Book PublishedYear</label>
                    <input
                    name="publishedYear"
                    id="publishedYear" 
                    type="number" 
                    placeholder="1926"
                    min={1}
                    max={new Date().getFullYear()} 
                    className="input w-full"
                    value={bookData.publishedYear}
                    onChange={handleOnChnage} 
                    required
                    />
                    <label htmlFor="description" className="text-sm font-medium mb-1">Book Description</label>
                    <textarea 
                    className="textarea w-full"
                    name="description"
                    id="description" 
                    rows={3} 
                    placeholder="Enter a brief description of the book..."
                    value={bookData.description}
                    onChange={handleOnChnage}
                    ></textarea>
                    <label htmlFor="file" className="text-sm font-medium mb-1">Upload Cover Image</label>
                    <input
                    name="coverImage" 
                    type="file" 
                    id="file"
                    accept="image/*"
                    onChange={handleOnChnage}
                    required 
                    className="file-input w-full" />
                    <button className="btn w-full" 
                    type="submit" 
                    disabled={isLoading}>{isLoading ? "Processing..." : "NewBook"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}