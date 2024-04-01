import React from "react";

const Songs = ({ data }) => {
  return (
    <div className="Songs">
      <div className="metaDataRow">
        <img alt="poster" className="posterImage" src={data.posterPhotoUrl} />
        <div className="songDesc">
          <div className="songTitle">{data.title}</div>
          <div className="songSinger">Arjit Singh</div>
        </div>
      </div>
    </div>
  );
};

export default Songs;
