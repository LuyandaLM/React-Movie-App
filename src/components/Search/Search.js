import React from "react";
import { Link } from "react-router-dom";

import { useStateValue } from "../../StateProvider";
// live api call
import useGoogleSearch from "../../useGoogleSearch";

// import Response from "../../response";
import SearchBar from "../SearchBar/SearchBar";

import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./_searchPage.scss";

const Search = () => {
  const [{ term }, dispatch] = useStateValue();

  const { data } = useGoogleSearch(term);

  // mock data
  // const data = Response;
  // console.log(data);

  return (
    <div className="searchPage">
      <div className="header">
        <Link to="/">
          <img
            className="image"
            src="https://i.postimg.cc/j5ZxDtcp/googlebrand.png"
            alt="google"
          />
        </Link>
        <div className="body">
          <SearchBar hideButtons />
          <div className="options">
            <div className="left">
              <div className="option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="right">
              <div className="option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="results">
          <p className="resultCount">
            About{" "}
            <strong>{data?.searchInformation.formattedTotalResults}</strong>{" "}
            results (
            <strong>{data?.searchInformation.formattedSearchTime}</strong>{" "}
            seconds) for <strong>{term}</strong>
          </p>
          {data?.items.map((item) => (
            <div className="allResults">
              <p>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt="resultImage"
                    />
                  )}

                {item.displayLink}
              </p>
              <a href={item.link} className="title" target="blank">
                <h2>{item.title}</h2>
              </a>
              <p className="snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
