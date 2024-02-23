import React from "react";
import axios from "axios";
import { useState } from "react";

export default function AddTodo({ fetchData }) {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://todo-list-st7u.onrender.com/todo/addtodo", {
        title: title,
        description: description,
      });
      fetchData();
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error : " + error);
    }
  };

  return (
    <div className="container container-style mt-5 mb-3">
      <h2 className="text-center mb-4 header">
        <b className="text-primary">--- </b>Add Todo
        <b className="text-primary"> ---</b>
      </h2>
      <form>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="titleInput"
            placeholder="Todo Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <label htmlFor="titleInput">Title</label>
        </div>

        <div className="form-floating mb-3">
          <textarea
            className="form-control form-control-description"
            id="descriptionInput"
            rows="2"
            placeholder="Todo Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            style={{ height: "110px" }}
          ></textarea>
          <label htmlFor="descriptionInput">Description</label>
        </div>

        <div className="mb-3 mt-4">
          <button
            type="button"
            className="btn btn-outline-primary btn-blue"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Add Todo
          </button>
        </div>
      </form>
      <hr />
    </div>
  );
}
