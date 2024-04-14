import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
      <Header />
      <div className=" text-center sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 py-56">

        Welcome to my page! Use the options on the NavBar to see which restaurants the page have.

      </div>

    </>


  );

};

export default Home;
