import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export const BlogList = () => {
  const [blog, setBlog] = useState([]);
  const [postPerPage, setPostPerPage] = useState(6);
  const [currPage, setCurrPage] = useState(1);
  const [totalPost, setTotalPost] = useState(0);
  const navigate = useNavigate();

  const indexOfLastPost = currPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const onClick = (blogId) => {
    navigate(`blog/${blogId}`);
  };

  const getBlog = async () => {
    try {
      const response = await Axios.get(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog/?size=${postPerPage}`
      );
      setBlog(response.data.result);
      setCurrPage(response.data.blogPage);
      setTotalPost(response.data.rows);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-black">
      {blog.map((item, index) => (
        <div key={index} className="w-64 m-4 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <div onClick={() => onClick(item.id)}>
            <img src={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`} alt="Blog Thumbnail" className="w-full h-48 object-cover" />
          </div>
          <div className="p-4">
            <h2 className="text-white text-xl font-bold mb-2">{item.title}</h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-400 mr-2"></div>
                <p className="text-white">{item.User.username}</p>
              </div>
              <p className="text-gray-400">
                {new Date(`${item.createdAt}`).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
