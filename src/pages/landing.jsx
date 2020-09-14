import React,{useState,useEffect} from "react";
import Post from "../components/post";

export default function Landing() {
    const [lists, setLists] = useState(Array.from(Array(10).keys()))
    function handleScroll() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log("fetch");
        }
      }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    }, [])
return (
    <div>
      <div className="w-full bg-gray-300">
        <div className=" items-center container flex flex-col bg-gray-400 w-full mx-auto text-white font-bold text-2xl p-5">
         <div className="mb-5">All Post</div>
          {lists.map((listx,index) => <Post key={index} text={listx}></Post>)}
        </div>
      </div>
    </div>
  );
}
