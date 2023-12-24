import React from "react";
import "./diaryentries.css";
import { Link } from "react-router-dom";
import Add from "../../assets/add.png";
import LogoutButton from "../../components/LogoutButton";
const DiaryEntries = () => {
  return (
    <div className="diaryEntriesContainer">
      <div className="diaryEntriesWrapper">
        <div className="diaryEntriesHeader">
          <h2 className="diaryEntriesTitle">&#9782; Your Entries</h2>
          <p>3</p>
        </div>
        <div className="diaryEntriesList">
          <Link to="/entries" className="entryLink">
            <p className="diaryEntriesListItem">Lorem ipsum dolor sit amet.</p>
          </Link>
          <Link to="/entries" className="entryLink">
            <p className="diaryEntriesListItem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, totam.
            </p>
          </Link>
          <Link to="/entries" className="entryLink">
            <p className="diaryEntriesListItem">
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </p>
          </Link>
        </div>
        <LogoutButton />
        <Link to="/entries" className="button-float">
          <img src={Add} alt="" className="button-img" />
        </Link>
      </div>
    </div>
  );
};

export default DiaryEntries;
