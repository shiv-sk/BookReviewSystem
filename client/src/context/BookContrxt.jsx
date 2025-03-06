import { createContext, useContext, useState } from "react";
import { baseUrl, getAndDeleteReq, postAndPatchReq } from "../apiCalls/apiCalls";

const BookContext = createContext({
    getAllBooks:()=>{},
    addBook:()=>{},
    getBook:()=>{},
    editBook:()=>{},
    deleteBook:()=>{},
    getPopularBooks:()=>{},
    getNewlyAddedBooks:()=>{},
    filterByGenre:()=>{},
})
const useBook = ()=>useContext(BookContext);

const BookProvider = ({children})=>{
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(null);
    const getAllBooks = async()=>{
        try {
            setIsLoading(true);
            const response = await getAndDeleteReq(`${baseUrl}/book/` , "get");
            // console.log("response from getBooks! " , response?.data);
            return { success: true, data: response?.data };
        } catch (error) {
            console.log("error from getBooks! " , error);
            const errorMessage = error.response?.data?.message || "fetch AllBooks failed. Please try again.";
            setError(errorMessage);
            return { success: false, error: errorMessage || "fetch AllBooks failed." }; 
        }finally{
            setIsLoading(false);
        }
    }
    const getPopularBooks = async()=>{
        try {
            setIsLoading(true);
            const response = await getAndDeleteReq(`${baseUrl}/book/popular` , "get");
            // console.log("response from getBooks! " , response?.data);
            return { success: true, data: response?.data };
        } catch (error) {
            console.log("error from getBooks! " , error);
            const errorMessage = error.response?.data?.message || "fetch AllBooks failed. Please try again.";
            setError(errorMessage);
            return { success: false, error: errorMessage || "fetch AllBooks failed." }; 
        }finally{
            setIsLoading(false);
        }
    }
    const getNewlyAddedBooks = async()=>{
        try {
            setIsLoading(true);
            const response = await getAndDeleteReq(`${baseUrl}/book/newadded` , "get");
            // console.log("response from getBooks! " , response?.data);
            return { success: true, data: response?.data };
        } catch (error) {
            console.log("error from getBooks! " , error);
            const errorMessage = error.response?.data?.message || "fetch AllBooks failed. Please try again.";
            setError(errorMessage);
            return { success: false, error: errorMessage || "fetch AllBooks failed." }; 
        }finally{
            setIsLoading(false);
        }
    }
    const getBook = async(bookId)=>{
        try {
            setIsLoading(true);
            const response = await getAndDeleteReq(`${baseUrl}/book/${bookId}` , "get");
            // console.log("response from getBooks! " , response?.data);
            return { success: true, data: response?.data };
        } catch (error) {
            console.log("error from getBooks! " , error);
            const errorMessage = error.response?.data?.message || "fetching a Book failed. Please try again.";
            setError(errorMessage);
            return { success: false, error: errorMessage || "fetching a Book failed." }; 
        }finally{
            setIsLoading(false);
        }
    }
    const filterByGenre = async(genre)=>{
        if(!genre)return;
        try {
            setIsLoading(true);
            const response = await getAndDeleteReq(`${baseUrl}/book/filter?genre=${genre}` , "get");
            // console.log("response from getBooks! " , response?.data);
            return { success: true, data: response?.data };
        } catch (error) {
            console.log("error from getBooks! " , error);
            const errorMessage = error.response?.data?.message || "fetching a Book failed. Please try again.";
            setError(errorMessage);
            return { success: false, error: errorMessage || "fetching a Book failed." }; 
        }finally{
            setIsLoading(false);
        }
    }
    const editBook = async(bookId , data)=>{
        try {
            setIsLoading(true);
            const response = await postAndPatchReq(`${baseUrl}/book/${bookId}` , "patch" , data , true);
            // console.log("response from getBooks! " , response?.data);
            return { success: true, data: response?.data };
        } catch (error) {
            console.log("error from getBooks! " , error);
            const errorMessage = error.response?.data?.message || "Editing a Book failed. Please try again.";
            setError(errorMessage);
            return { success: false, error: errorMessage || "Editing a Book failed." }; 
        }finally{
            setIsLoading(false);
        }
    }
    const deleteBook = async(bookId)=>{
        try {
            setIsLoading(true);
            const response = await getAndDeleteReq(`${baseUrl}/book/${bookId}` , "delete");
            // console.log("response from getBooks! " , response?.data);
            return { success: true, data: response?.data };
        } catch (error) {
            console.log("error from getBooks! " , error);
            const errorMessage = error.response?.data?.message || "delete a Book failed. Please try again.";
            setError(errorMessage);
            return { success: false, error: errorMessage || "delete a Book failed." }; 
        }finally{
            setIsLoading(false);
        }
    }
    const addBook = async(data)=>{
        try {
            setIsLoading(true);
            const response = await postAndPatchReq(`${baseUrl}/book/newbook` , "post" , data , true);
            console.log("response from getBooks! " , response?.data);
            return { success: true, data: response?.data };
        } catch (error) {
            console.log("error from getBooks! " , error);
            const errorMessage = error.response?.data?.message || "adding a New Book failed. Please try again.";
            setError(errorMessage);
            return { success: false, error: errorMessage || "adding a New Book failed." }; 
        }finally{
            setIsLoading(false);
        }
    }
    return (
        <BookContext.Provider value={{getAllBooks , getBook , editBook , deleteBook , addBook , getNewlyAddedBooks , 
            getPopularBooks , filterByGenre, isLoading , error}}>
            {children}
        </BookContext.Provider>
    )
}

export {BookProvider , useBook};