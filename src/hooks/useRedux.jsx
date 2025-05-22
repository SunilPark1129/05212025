import React, { useEffect, useState } from "react";
import { store } from "../store/store";

export function useSelector(selector) {
  let state = selector(store.getState());
  const [_, forceRender] = useState(() => selector(store.getState()));

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceRender({});
    });

    // selector is changing -> cleanup
    return unsubscribe;
  }, [selector]);

  return state;
}

export function useDispatch() {
  return store.dispatch;
}

export default { useSelector, useDispatch };
