import { useMyContext } from "./App";

const Value = () => {
  const [value] = useMyContext();
  return <div>{value}</div>;
};

export default Value;
