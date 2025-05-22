const initialState = [
  {
    make: "Toyota",
    quantity: 10,
    id: 1,
  },
  {
    make: "Honda",
    quantity: 10,
    id: 2,
  },
  {
    make: "Nissan",
    quantity: 10,
    id: 3,
  },
];

const carsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SELL":
      return state.map((car) =>
        car.id === payload.id ? { ...car, quantity: car.quantity - 1 } : car
      );
    case "ADD":
      return state.map((car) =>
        car.id === payload.id ? { ...car, quantity: car.quantity + 1 } : car
      );
    default:
      return state;
  }
};

export { carsReducer };
