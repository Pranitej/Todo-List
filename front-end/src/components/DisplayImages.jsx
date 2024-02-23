import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DisplayImages({ data, fetchImageData }) {
  const deleteImage = async (imageId) => {
    try {
      await axios.delete(`https://todo-list-st7u.onrender.com/image/deleteimage/${imageId}`);
      fetchImageData();
    } catch (error) {
      console.error("Error : " + error);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row mb-5">
        {data !== null ? (
          data.length > 0 ? (
            <>
              <h2 className="text-center mb-4 header">
                <b className="text-primary">--- </b>Image Notes
                <b className="text-primary"> ---</b>
              </h2>
              <br />
              {data.map((item) => {
                return (
                  <div className="col-lg-4" key={item._id}>
                    <div className="card card1 mb-3 mt-3">
                      <img
                        src={`https://todo-list-st7u.onrender.com/${item.image}`}
                        className="card-img-top card-image"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="blue"
                            class="bi bi-image"
                            viewBox="0 0 16 16"
                            transform="translate(0, -2)"
                          >
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12" />
                          </svg>
                          <span style={{ marginLeft: "7px" }}>
                            {item.title}
                          </span>
                        </h5>
                        <p className="card-text">{item.description}</p>
                        <button
                          className="btn btn-outline-danger btn-red"
                          onClick={() => deleteImage(item._id)}
                        >
                          Delete
                        </button>

                        <Link
                          type="button"
                          className="btn btn-outline-primary btn-blue"
                          style={{ marginLeft: "10px" }}
                          target="_blank"
                          to={`https://todo-list-st7u.onrender.com/${item.image}`}
                        >
                          View Image
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <div className="alert alert-warning" role="alert">
                The Image Notes is Empty Right Now!!!
              </div>
            </>
          )
        ) : (
          <>
            <br />
            <div className="container">
              <div className="alert alert-danger" role="alert">
                Connection to the server has lost :(
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
