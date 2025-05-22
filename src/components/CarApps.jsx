import { useSelector, useDispatch } from "../hooks/useRedux";

function CarApp() {
  console.log("child render");
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
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
        </div>
      ))}
    </div>
  );
}

export default CarApp;
