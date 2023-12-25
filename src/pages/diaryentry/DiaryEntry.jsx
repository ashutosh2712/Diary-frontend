import React, { useEffect, useState } from "react";
import "./diaryentry.css";
import LeftArrow from "../../assets/leftArrow.png";
import { useNavigate, useParams } from "react-router-dom";
import Login from "../login/Login";
import { useAuth } from "../../context/AuthContext";
const DiaryEntry = () => {
  const { id } = useParams();
  const entryId = id;

  const navigate = useNavigate();
  const [diaryEntry, setDiaryEntry] = useState(null);
  const { getAuthToken } = useAuth();

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
  const createDiaryEntry = async () => {
    try {
      const authToken = getAuthToken();
      fetch(`http://127.0.0.1:8000/api/entries/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${authToken}`,
        },
        body: JSON.stringify(diaryEntry),
      });
    } catch (error) {
      console.log(error);
    }
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

  const deleteDiaryEntry = () => {
    try {
      fetch(`http://127.0.0.1:8000/api/entries/${entryId}/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    if (entryId != "new" && !diaryEntry.body) {
      deleteDiaryEntry();
    } else if (entryId != "new") {
      updateDiaryEntry();
    } else if (entryId == "new" && diaryEntry.body !== null) {
      createDiaryEntry();
    }
    navigate("/");
  };

  return (
    <div className="diaryEntryContainer">
      <div className="diaryEntryWrapper">
        <div className="diaryEntryHeader">
          <img src={LeftArrow} className="backEntry" onClick={handleSubmit} />

          {entryId !== "new" ? (
            <div className="doneEntry" onClick={deleteDiaryEntry}>
              Delete
            </div>
          ) : (
            <div className="doneEntry" onClick={handleSubmit}>
              Done
            </div>
          )}
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
