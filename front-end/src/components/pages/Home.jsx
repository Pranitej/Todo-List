import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "../NavBar";
import AddTodo from "../AddTodo";
import DisplayTodos from "../DisplayTodos";

export default function Home() {
  let [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://todo-list-st7u.onrender.com/todo/getalltodos"
      );
      setData(response.data.reverse());
    } catch (error) {
      console.error("Error : " + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavBar page={"home"} />
      <AddTodo fetchData={fetchData} />
      <DisplayTodos data={data} fetchData={fetchData} />
    </>
  );
}
