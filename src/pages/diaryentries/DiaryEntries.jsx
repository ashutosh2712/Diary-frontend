import React, { useEffect, useState } from "react";
import "./diaryentries.css";
import LogoutButton from "../../components/LogoutButton";
import { useUser } from "../../context/UserContext";
import { useAuth } from "../../context/AuthContext";
import DiaryEntriesList from "../../components/DiaryEntriesList";
import AddButton from "../../components/AddButton";
const DiaryEntries = () => {
  const { user, setUser } = useUser();
  const { getAuthToken } = useAuth();
  const [userDiaryEntries, setUserDiaryEntries] = useState([]);

  useEffect(() => {
    const getDiaryEntries = async () => {
      try {
        const authToken = getAuthToken();
        const response = await fetch("http://127.0.0.1:8000/api/entries/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${authToken}`,
          },
        });
        const data = await response.json();
        const currentUser = data.user;
        setUser(currentUser);
        const diaryEntries = data.entries;
        setUserDiaryEntries(diaryEntries);
      } catch (error) {
        console.log(error);
      }
    };
    getDiaryEntries();
  }, [setUser]);

  return (
    <div className="diaryEntriesContainer">
      <div className="diaryEntriesWrapper">
        <div className="diaryEntriesHeader">
          <h2 className="diaryEntriesTitle">&#9782; Your Entries</h2>
          <p>{userDiaryEntries.length}</p>
        </div>
        <div className="diaryEntriesList">
          {userDiaryEntries.map((entry, index) => (
            <DiaryEntriesList key={index} entry={entry} />
          ))}
        </div>
        <LogoutButton />
        <AddButton />
      </div>
    </div>
  );
};

export default DiaryEntries;
