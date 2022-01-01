import { act, renderHook } from "@testing-library/react-hooks";

import { useToggle } from "@/hooks";

describe("useToggle", () => {
  test("should initialize as false", () => {
    const { result } = renderHook(() => useToggle());
    const [value] = result.current;
    expect(value).toBe(false);
  });

  test("should change to opposite when toggled", () => {
    const { result } = renderHook(() => useToggle());
    const [, toggle] = result.current;
    act(() => {
      toggle();
    });
    const [value] = result.current;
    expect(value).toBe(true);
  });

  test("should initialize with provided value", () => {
    const { result } = renderHook(
      ({ initialValue }) => useToggle(initialValue),
      {
        initialProps: { initialValue: true },
      }
    );
    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(false);
  });
});
