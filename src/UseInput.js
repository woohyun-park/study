import { useState, useCallback } from "react";

const UseInput = (initialValue = null) => {
  const [data, setData] = useState(initialValue);
  const handler = useCallback(
    (e) => {
      const { value, id } = e.target;
      setData({ ...data, [id]: value });
    },
    [data]
  );
  return [data, handler];
};

export default UseInput;
