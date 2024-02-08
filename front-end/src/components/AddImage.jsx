import React from "react";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";

export default function AddImage({ fetchImageData }) {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [image, setImage] = useState(null);
  let imageFileTag = useRef(null);

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("title", title);
      formData.append("description", description);

      await axios.post("http://localhost:5000/image/uploadImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setTitle("");
      setDescription("");
      imageFileTag.current.value = "";
      fetchImageData();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = () => {
    if (title === "" || image === "" || image === null) {
      alert("Please fill in all fields...");
    } else {
      handleUpload();
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 header">
        <b className="text-primary">--- </b>Add Image
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

          <div className="mt-3 mb-3">
            <input
              className="form-control form-control-md"
              type="file"
              accept="image/*"
              id="formFile"
              ref={imageFileTag}
              placeholder="Choose an image"
              onChange={(e) => setImage(e.target.files[0])}
            />
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
              Add Image
            </button>
          </div>
        </div>
      </form>
      <hr />
    </div>
  );
}
