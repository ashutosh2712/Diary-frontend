import React from "react";
import "./diaryentries.css";
import { Link } from "react-router-dom";
const DiaryEntries = () => {
  return (
    <div className="diaryEntriesContainer">
      <div className="diaryEntriesWrapper">
        <div className="diaryEntriesHeader">
          <h2>Entries</h2>
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
      </div>
    </div>
  );
};

export default DiaryEntries;
