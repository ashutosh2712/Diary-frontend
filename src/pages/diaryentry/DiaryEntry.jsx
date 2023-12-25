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

  const updateDiaryEntry = async () => {
    try {
      fetch(`http://127.0.0.1:8000/api/entries/${entryId}/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(diaryEntry),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    updateDiaryEntry();
    navigate("/");
  };

  return (
    <div className="diaryEntryContainer">
      <div className="diaryEntryWrapper">
        <div className="diaryEntryHeader">
          <img src={LeftArrow} className="backEntry" onClick={handleSubmit} />
          <div className="doneEntry">Done</div>
        </div>
        <div className="diaryBody">
          <textarea
            onChange={(e) => {
              setDiaryEntry({ ...diaryEntry, body: e.target.value });
            }}
            name="diary"
            id="diary"
            value={diaryEntry?.body}
            className="diaryText"
            rows="31"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default DiaryEntry;
