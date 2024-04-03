import React from "react";

const Songs = ({ data }) => {
  return (
    <div className="Songs">
      <div className="metaDataRow">
        <img alt="poster" className="posterImage" src={data.info.thumbnail_url} />
        <div className="songDesc">
          <div className="songTitle">{data.info.title}</div>
          <div className="songSinger">{data.info.author_name}</div>
        </div>
      </div>
    </div>
  );
};

export default Songs;
