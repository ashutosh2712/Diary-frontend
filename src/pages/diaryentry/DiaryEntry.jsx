import React, { useEffect, useState } from "react";
import "./diaryentry.css";
import LeftArrow from "../../assets/leftArrow.png";
import { useNavigate, useParams } from "react-router-dom";
const DiaryEntry = () => {
  const { id } = useParams();
  const entryId = id;

  const navigate = useNavigate();
  const [diaryEntry, setDiaryEntry] = useState(null);

  useEffect(() => {
    getDiaryEntry();
  }, [entryId]);

  const getDiaryEntry = async () => {
    if (entryId == "new") return;
    const response = await fetch(
      `http://127.0.0.1:8000/api/entries/${entryId}`
    );
    const data = await response.json();
    setDiaryEntry(data);
  };

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
