import React from "react";
import statementData from "../data/statementData";
import { useInView } from "react-intersection-observer";

function MissionStatement() {
  return (
    <div className="values-container">
      {statementData.map((data, index) => {
        const { ref, inView } = useInView();
        return (
          <div key={index} className="value-card">
            <div className="value-card-img">
              <img
                ref={ref}
                src={data.img}
                alt=""
                className={inView ? "value-rotate":""}
              />
              <p className="value-count">{index + 1}</p>
              <h1 className="value-heading">{data.title}</h1>
            </div>
            <div className="value-description">
              <p>{data.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MissionStatement;
