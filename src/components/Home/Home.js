import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

import "./_home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="nav">
        <div className="left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon className="icon" />
          <Avatar />
        </div>
      </div>
      <div className="body">
        <img
          className="image"
          src="https://i.postimg.cc/j5ZxDtcp/googlebrand.png"
          alt="google"
        />
        <div className="container">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
