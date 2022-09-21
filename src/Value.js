import { useCounterValue } from "./App";

const Value = () => {
  const value = useCounterValue();
  return <div>{value}</div>;
};

export default Value;
