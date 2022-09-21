import { createContext, useContext, useMemo, useState } from "react";
import Value from "./Value";
import Button from "./Button";

const CounterValueContext = createContext();
const CounterActionContext = createContext();

function CounterProvider({ children }) {
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
    []
  );
  return (
    <CounterActionContext.Provider value={actions}>
      <CounterValueContext.Provider value={counter}>
        {children}
      </CounterValueContext.Provider>
    </CounterActionContext.Provider>
  );
}

export function useCounterValue() {
  const value = useContext(CounterValueContext);
  if (value === undefined) {
    throw new Error(
      "useCounterValue should be used within CounterValueContext.Provider"
    );
  }
  return value;
}

export function useCounterActions() {
  const value = useContext(CounterActionContext);
  if (value === undefined) {
    throw new Error(
      "useCounterActions should be used within CounterActionsContext.Provider"
    );
  }
  return value;
}

function App() {
  return (
    <CounterProvider>
      <div>
        <Value />
        <Button />
      </div>
    </CounterProvider>
  );
}

export default App;
