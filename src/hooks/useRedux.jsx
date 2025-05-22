import React, { useEffect, useState } from "react";
import { store } from "../store/store";

export function useSelector(selector) {
  const [selectedState, setSelectedState] = useState(() =>
    selector(store.getState())
  );

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const newState = selector(store.getState());
      setSelectedState(newState);
    });

    // selector is changing -> cleanup
    return unsubscribe;
  }, [selector]);

  return selectedState;
}

export function useDispatch() {
  return store.dispatch;
}

export default { useSelector, useDispatch };
