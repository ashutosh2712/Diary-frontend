import React from "react";
import "./diaryentry.css";
const DiaryEntry = () => {
  return (
    <div className="diaryEntryContainer">
      <div className="diaryEntryWrapper">
        <div className="diaryEntryHeader">
          <div className="backEntry">Back</div>
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
