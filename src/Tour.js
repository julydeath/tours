import React, { useState } from "react";

const Tour = ({ list, handleDelete }) => {
  const [readMore, setReadMore] = useState(false);

  const handleChange = () => {
    setReadMore(!readMore);
  };

  console.log(readMore);

  return (
    <main>
      {list.map((li) => (
        <article className="single-tour">
          <img className="single-tour" src={li.image} alt="name" />
          <h3 className="title">{li.name}</h3>
          <p>
            {readMore ? (
              <p className="tour-info">{li.info}</p>
            ) : (
              <p className="tour-info">{li.info.substring(0, 100)}</p>
            )}
            {readMore ? (
              <button className="underline" onClick={handleChange}>
                showless
              </button>
            ) : (
              <button className="underline" onClick={handleChange}>
                showmore
              </button>
            )}
          </p>
          <button className="delete-btn" onClick={() => handleDelete(li.id)}>
            Not interested
          </button>
        </article>
      ))}
    </main>
  );
};

export default Tour;
