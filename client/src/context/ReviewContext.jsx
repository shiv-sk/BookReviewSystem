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
            console.log("response from getReviews! " , response);
        } catch (error) {
            console.log("error from getReviews! " , error);
            setError(error);
        }finally{
            setIsLoading(false);
        }
    }
    const postReview = async(data)=>{
        try {
            setIsLoading(true);
            const response = await postAndPatchReq(`${baseUrl}/review/new` , "post" , data);
            console.log("response from getReviews! " , response);
        } catch (error) {
            console.log("error from getReviews! " , error);
            setError(error);
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