import React from "react";
import Point from "./Point";
import { datos } from "../data/pointData";
const Pointer = () => {
  console.table(datos);
  return (
    <>
      <div className="contenedor">
        {datos.map((point, i) => (
          <Point
            key={i}
            color={point.color}
            seven={point.seven}
            cero={point.cero}
          />
        ))}
      </div>
    </>
  );
};

export default Pointer;
