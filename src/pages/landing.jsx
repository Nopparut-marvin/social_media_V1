import React,{useState,useEffect} from "react";
import Post from "../components/post";
import useInfiniteScroll from "../utility/useInfinite"

export default function Landing() {
    const fetchMore = () => {
        setLists(prevState => [...prevState,...Array.from(Array(5).keys())]);
    }

    const [lists, setLists] = useState(Array.from(Array(10).keys()))
    const [isFetching,setIsFetching] = useInfiniteScroll(fetchMore)
    
return (
    <div>
      <div className="w-full bg-gray-300">
        <div className=" items-center container flex flex-col bg-gray-400 w-full mx-auto text-white font-bold text-2xl p-5">
         <div className="mb-5">All Post</div>
          {lists.map((listx,index) => <Post key={index} text={listx}></Post>)}
          {isFetching ? <span>loading...</span>:null}
        </div>
      </div>
    </div>
  );
}
