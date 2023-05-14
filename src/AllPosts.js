
import React from "react";
import Row from "./Row";

const AllPosts = ({ data, search, setSearch }) => {
  return (
    <>
      <form className="searchForm">
        {/* <input
          className="input-tag"
          type="text"
          placeholder="Search code or name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> */}
      </form>
      {data && (
        <ul className="ul">
          {data.map((data) => (
            <Row key={data.id} data={data} />
          ))}
        </ul>
      )}
    </>
  );
};

export default AllPosts;
