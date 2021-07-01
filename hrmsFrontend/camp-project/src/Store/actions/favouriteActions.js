export const ADD_TO_FAVOURİTE = "ADD_TO_FAVOURİTE"
export const REMOVE_FROM_FAVOURİTE = "REMOVE_FROM_FAVOURİTE"
export function addToFavourite(jobPosting){
    return{
        type : ADD_TO_FAVOURİTE,
        payload: jobPosting
    }
}

export function removeToFavourite(jobPosting){
    return{
        type : REMOVE_FROM_FAVOURİTE,
        payload: jobPosting
    }
}