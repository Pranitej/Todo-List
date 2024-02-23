import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import NavBar from "../NavBar";
import AddImage from "../AddImage";
import DisplayImages from "../DisplayImages";

export default function Images() {
  let [data, setData] = useState(null);

  const fetchImageData = async () => {
    try {
      const response = await axios.get("https://todo-list-st7u.onrender.com/image/getImage");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching image data:", error);
    }
  };

  useEffect(() => fetchImageData(), []);

  return (
    <>
      <NavBar page="image" />
      <AddImage fetchImageData={fetchImageData} />
      <DisplayImages data={data} fetchImageData={fetchImageData} />
    </>
  );
}
