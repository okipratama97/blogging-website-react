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
    <div>
      <div>
        navbar
      </div>
      <div>
        <div>
          <img
            src={`https://minpro-blog.purwadhikabootcamp.com/${blog?.imageURL}`}
            alt="Blog Image"
          />
        </div>
        {user === username ? <DeleteButton /> : null}
      </div>
      <h1>{blog?.title}</h1>
      <div>
        <img
          src={`https://minpro-blog.purwadhikabootcamp.com/${blog?.User?.imgProfile}`}
          alt="User Avatar"
        />
        <p>{blog?.User.username}</p>
      </div>
      <div>
        <p>{blog?.Category.name}</p>
      </div>
      <div>
        <p>{new Date(`${blog?.createdAt}`).toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}</p>
      </div>
      <div>
        <p>{blog?.content}</p>
      </div>
      <div>
        cardsire
      </div>
      <div>
        footer
      </div>
    </div>
  );
};

export default BlogDetailPage