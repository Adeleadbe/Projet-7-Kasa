import React from "react";

  const Tags = ({ tag }) => {
    return (
      <div className="tag">
        {tag.map((element, index) => {
          return <span key={index}>{element}</span>;
        })}
      </div>
    );
  };
  export default Tags;
