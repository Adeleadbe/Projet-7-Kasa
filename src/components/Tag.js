import React from "react";

  const Tag = ({ tags }) => {
    return (
      <div className="tag">
        {tags.map((element, index) => {
          return <span key={index}>{element}</span>;
        })}
      </div>
    );
  };
  export default Tag;
