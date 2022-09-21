import { createContext, useContext, useMemo, useState } from "react";
import Value from "./Value";
import Button from "./Button";

const MyContext = createContext();

function MyContextProvider({ children }) {
  const [counter, setCounter] = useState(1);
  const actions = useMemo(
    () => ({
      increase() {
        setCounter((prev) => prev + 1);
      },
      decrease() {
        setCounter((prev) => prev - 1);
      },
    }),
    [[]]
  );
  const value = useMemo(() => [counter, actions], [counter, actions]);
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export function useMyContext() {
  const value = useContext(MyContext);
  if (value === undefined) {
    throw new Error("useMyContext should be used within MyContext.Provider");
  }
  return value;
}

function App() {
  return (
    <MyContextProvider>
      <div>
        <Value />
        <Button />
      </div>
    </MyContextProvider>
  );
}

export default App;
