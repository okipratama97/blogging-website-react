import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import DeleteButton  from "../components/DeleteButton";
import { useSelector } from "react-redux";

const BlogDetailPage = () => {
  const { blogId } = useParams();
  const username = useSelector((state) => state.user.value.username);
  const [blog, setBlog] = useState();
  const [user, setUser] = useState();

  console.log(username)

  const getBlog = async () => {
    try {
      const response = await Axios.get(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog/${blogId}`
      );
      console.log(response.data[0]);
      setBlog(response.data[0]);
      setUser(response.data[0].User.username);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div class="bg-black text-white">
  <div class="relative">
    <img
      src={`https://minpro-blog.purwadhikabootcamp.com/${blog?.imageURL}`}
      alt="Blog Image"
      class="h-96 w-full object-cover"
    />
    {user === username ? <DeleteButton /> : null}
  </div>
  <h1 class="text-3xl font-bold mt-8">{blog?.title}</h1>
  <div class="flex items-center mt-4">
    <img
      src={`https://minpro-blog.purwadhikabootcamp.com/${blog?.User?.imgProfile}`}
      alt="User Avatar"
      class="h-8 w-8 rounded-full"
    />
    <p class="ml-2">{blog?.User.username}</p>
  </div>
  <div class="mt-4">
    <p class="text-sm">{blog?.Category.name}</p>
  </div>
  <div class="mt-2">
    <p class="text-sm">
      {new Date(`${blog?.createdAt}`).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </p>
  </div>
  <div class="mt-4">
    <p>{blog?.content}</p>
  </div>
  <div class="mt-8">
    <p class="text-lg font-bold">Cardsire</p>
  </div>
</div>

  );
};

export default BlogDetailPage