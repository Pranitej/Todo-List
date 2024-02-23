import React from "react";
import axios from "axios";

export default function DisplayTodos({ data, fetchData }) {
  const deleteTodo = async (todoId) => {
    try {
      await axios.delete(`https://todo-list-st7u.onrender.com/todo/deletetodo/${todoId}`);
      fetchData();
    } catch (error) {
      console.error("Error : " + error);
    }
  };

  const deleteAll = async () => {
    try {
      await axios.delete(`https://todo-list-st7u.onrender.com/todo/deletealltodos`);
      fetchData();
    } catch (error) {
      console.error("Error : " + error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {data !== null ? (
          data.length > 0 ? (
            <>
              <h2 className="text-center mt-3 mb-3 header">
                <b className="text-primary">--- </b>Todo Lists
                <b className="text-primary"> ---</b>
              </h2>
              <br />
              <form>
                <div className="row">
                  {data.map((todo, index) => {
                    return (
                      <div className="col-lg-4 mb-3 mt-3" key={todo._id}>
                        <div className="card card1">
                          <div className="card-body bg-green">
                            <h5 className="card-title">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="blue"
                                className="bi bi-pencil"
                                viewBox="0 0 16 16"
                              >
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                              </svg>
                              {"          " + (index + 1)} - {todo.title}
                            </h5>
                            <pre
                              style={{
                                fontFamily: "poppins",
                                paddingBottom: "7px",
                              }}
                              className="card-text"
                            >
                              {todo.description}
                            </pre>
                            <button
                              type="button"
                              onClick={() => deleteTodo(todo._id)}
                              className="btn btn-outline-danger btn-red"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </form>
              <br />
              <div className="col-md-12 mb-5">
                <br />
                <button
                  type="button"
                  className="btn btn-outline-danger btn-md align-center btn-red"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Delete All
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Delete Alert
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        Do you want to <b className="text-danger">DELETE ALL</b>{" "}
                        the todos ?
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary btn-grey"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-red"
                          data-bs-dismiss="modal"
                          onClick={() => deleteAll()}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <br />
              <div className="container">
                <div className="alert alert-warning" role="alert">
                  The Todo List is Empty Right Now !!!
                </div>
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
