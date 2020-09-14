import { List } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Post from "../components/post";
import useInfiniteScroll from "../utility/useInfinite";

export default function Landing() {
  async function fetchMore(){
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10&_start=10"
        );
        setLists(prev => [...prev.concat(res.data)])
  };
  const [lists, setLists] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore);
  useEffect(() => {
    async function GetData() {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10&_start=0"
      );
      setLists(res.data)
    }
    GetData();
  }, []);
  useEffect(() => {
    console.log(lists.length);
  }, [lists])
  return (
    <div>
      <div className="w-full bg-gray-300">
        <div className=" items-center container flex flex-col bg-gray-400 w-full mx-auto text-white font-bold text-2xl p-5">
          <div className="mb-5">All Post</div>
          {lists.map((listx, index) => (
            <Post key={index} list={listx}></Post>
          ))}
          <span>loading...</span>
        </div>
      </div>
    </div>
  );
}
