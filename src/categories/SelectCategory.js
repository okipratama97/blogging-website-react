import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SelectCategory = () => {
  const [dataBlog, setDataBlog] = useState([]);
  const { id } = useParams();

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
        if (item.CategoryId === parseInt(id)) {
          return (
            <div key={index}>
              <div>
                <img
                  src={`https://minpro-blog.purwadhikabootcamp.com/${item.User.imgProfile}`}
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
        return null;
      })}
    </div>
  );
};

export default SelectCategory;
