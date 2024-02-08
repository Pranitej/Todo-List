import React from "react";
import NavBar from "../NavBar";

export default function About() {
  return (
    <>
      <NavBar page="about" />
      <div className="container mt-5">
        <div className="card card2">
          <div className="card-header">About this project</div>
          <div className="card-body">
            <p className="card-text">
              The Todo app is a modern and responsive web application built
              using React for the frontend, ensuring a dynamic and user-friendly
              interface. HTML and CSS provide the structure and styling, with
              Bootstrap enhancing the app's visual appeal and responsiveness.
              The backend is powered by Node.js and Express.js, facilitating
              seamless communication between the frontend and a MongoDB
              database. With JavaScript as the primary programming language,
              this app enables users to effortlessly manage and organize their
              tasks in a clean and intuitive environment.
            </p>
            <h5>
              <footer className="blockquote-footer mt-3 text-center">
                <cite title="Source Title">By Pranitej Vangala</cite>
              </footer>
            </h5>
          </div>
        </div>

        <div className="card card2 mt-5">
          <div className="card-header">
            What is Todo Application and why should we use Todo Application ?
          </div>
          <div className="card-body">
            <p className="card-text">
              A to-do app, short for a "to-do list application," is a software
              tool designed to help individuals or teams manage and organize
              tasks, activities, and goals. These apps are often used for
              personal productivity and project management purposes. The primary
              function of a to-do app is to create, track, and prioritize tasks,
              making it easier for users to stay organized and focused on their
              goals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
