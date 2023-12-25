import React from "react";
import { Link } from "react-router-dom";

const getDate = (entry) => {
  return new Date(entry.updated).toLocaleDateString();
};

const getContent = (entry) => {
  let content = entry.body.replaceAll("\n", " ");

  if (content.length > 45) {
    return content.slice(0, 45) + "...";
  }
  return content;
};
const DiaryEntriesList = ({ entry }) => {
  return (
    <Link to={`/entries/${entry.id}`} className="entryLink">
      <p className="diaryEntriesListItem">
        <span>{getDate(entry)}</span>
        {getContent(entry)}
      </p>
    </Link>
  );
};

export default DiaryEntriesList;
