import React, { useEffect, useState } from "react";
import axios from "axios";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory"
      );
      setCategories(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div class="bg-black text-white">
    <h2 class="text-2xl font-bold mb-4">Category</h2>
    <ul class="flex flex-wrap">
      {categories.map((category, index) => (
        <li key={index} class="mr-4 mb-2">
          <a
            href={`/category/${category.id}`}
            class="px-4 py-2 bg-red-600 rounded-lg text-white hover:bg-red-700"
          >
            {category.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
  
  );
};

export default CategoryList;
