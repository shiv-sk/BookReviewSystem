import { createContext, useContext, useState } from "react";
import { baseUrl, getAndDeleteReq, postAndPatchReq } from "../apiCalls/apiCalls";

const reviewContext = createContext({
    getReviews:()=>{},
    postReview:()=>{}
})

const useReview = ()=>useContext(reviewContext);
const ReviewProvider = ({children})=>{
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(null);
    const getReviews = async(bookId)=>{
        try {
            setIsLoading(true);
            const response = await getAndDeleteReq(`${baseUrl}/review/${bookId}` , "get");
            // console.log("response from getBooks! " , response?.data);
            return { success: true, data: response?.data };
        } catch (error) {
            console.log("error from getReviews! " , error);
            const errorMessage = error.response?.data?.message || "fetch AllBooks failed. Please try again.";
            setError(errorMessage);
            return { success: false, error: errorMessage || "fetch AllBooks failed." };
        }finally{
            setIsLoading(false);
        }
    }
    const postReview = async(data)=>{
        try {
            setIsLoading(true);
            const response = await postAndPatchReq(`${baseUrl}/review/new` , "post" , data);
            // console.log("response from getBooks! " , response?.data);
            return { success: true, data: response?.data };
        } catch (error) {
            const errorMessage = error.response?.data?.message || "fetch AllBooks failed. Please try again.";
            setError(errorMessage);
            return { success: false, error: errorMessage || "fetch AllBooks failed." };
        }finally{
            setIsLoading(false);
        }
    }
    return(
        <reviewContext.Provider value={{isLoading , error , postReview , getReviews}}>
            {children}
        </reviewContext.Provider>
    )
}

export {ReviewProvider , useReview}