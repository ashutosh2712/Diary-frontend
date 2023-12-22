import React from "react";
import "./diaryentry.css";
import LeftArrow from "../../assets/leftArrow.png";
const DiaryEntry = () => {
  return (
    <div className="diaryEntryContainer">
      <div className="diaryEntryWrapper">
        <div className="diaryEntryHeader">
          <img src={LeftArrow} className="backEntry" />
          <div className="doneEntry">Done</div>
        </div>
        <div className="diaryBody">
          <textarea
            name="diary"
            id="diary"
            className="diaryText"
            rows="31"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default DiaryEntry;
