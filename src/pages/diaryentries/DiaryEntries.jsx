import React, { useEffect, useState } from "react";
import "./diaryentries.css";
import { Link } from "react-router-dom";
import Add from "../../assets/add.png";
import LogoutButton from "../../components/LogoutButton";
import { useUser } from "../../context/UserContext";
import { useAuth } from "../../context/AuthContext";
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
          <Link to="/entries" className="entryLink">
            <ul>
              {userDiaryEntries.map((entry) => (
                <li key={entry.id} className="diaryEntriesListItem">
                  {entry.body}
                </li>
              ))}
            </ul>
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
