import React from "react";
import { useDispatch, useSelector } from "../hooks/useRedux";

function Other() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  console.log("other render:", cars);
  return (
    <div>
      {cars.map((item) => (
        <div key={item.id}>
          {item.make}
          {item.quantity}
          <button
            onClick={() => dispatch({ type: "SELL", payload: { id: item.id } })}
          >
            SELL
          </button>
          <button
            onClick={() => dispatch({ type: "ADD", payload: { id: item.id } })}
          >
            ADD
          </button>
        </div>
      ))}
    </div>
  );
}

export default Other;
