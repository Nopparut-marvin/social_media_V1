import React, { useState,useEffect } from "react";

export default function UseInfinite(callback) {
    
const  [isFetching,setIsFetching] =useState(false)
const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight-1) {
        setIsFetching(true)
        console.log("DO");
      }
}
 
  useEffect(() => {
     if(isFetching){
         setTimeout(() => {
            callback()
            setIsFetching(false)
         }, 2000);
         
     }
  }, [isFetching])
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return [isFetching,setIsFetching]
}
