import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

import { Button } from "@material-ui/core";

import "./_search.scss";

const SearchBar = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="input">
        <img
          className="icon"
          src="https://i.postimg.cc/LstV1pm4/search.png"
          alt="search"
        />
        <input
          className="searchbar"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <img
          className="icon"
          src="https://i.postimg.cc/jj0X250k/mic.png"
          alt="mic"
        />
      </div>

      {!hideButtons ? (
        <div className="buttons">
          <Button
            type="submit"
            onClick={search}
            className="btn"
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="btn" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      ) : (
        <div className="buttons">
          <Button
            type="submit"
            onClick={search}
            className="btn hidden"
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="btn hidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
