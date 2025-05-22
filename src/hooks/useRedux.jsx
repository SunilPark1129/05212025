import React, { useEffect, useState } from "react";
import { store } from "../store/store";

export function useSelector(reducer) {
  const [selectedState, setSelectedState] = useState(() =>
    reducer(store.getState())
  );

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const newState = reducer(store.getState());
      setSelectedState(newState);
    });

    return unsubscribe; // cleanup
  }, [reducer]);

  return selectedState;
}

export function useDispatch() {
  return store.dispatch;
}

export default { useSelector, useDispatch };
