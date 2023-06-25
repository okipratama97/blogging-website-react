import React, { useEffect, useState } from "react";
import axios from "axios";

const SelectCategory = () => {
  const [dataBlog, setDataBlog] = useState([]);

  const getDataBlog = async () => {
    try {
      const response = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog"
      );
      setDataBlog(response.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataBlog();
  }, []);

  return (
    <div>
      {dataBlog.map((item, index) => {
        if (item.CategoryId === 2) {
          return (
            <div key={index}>
              <div>
                <img
                  src={`https://minpro-blog.purwadhikabootcamp.com/${item.User.username}`}
                  alt="User Avatar"
                />
                <div>
                  <p>{item.username}</p>
                  <h1>{item.title}</h1>
                  <p>
                    {new Date(item.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          );
        }
        
      })}
    </div>
  );
};

export default SelectCategory;