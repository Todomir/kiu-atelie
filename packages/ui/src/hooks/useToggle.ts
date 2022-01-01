import { useCallback, useState } from "react";

export const useToggle = (
  initialState = false
): [state: boolean, toggle: () => void] => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((prevState) => !prevState), []);

  return [state, toggle];
};
