import { createContext, useContext, useMemo, useState } from "react";
import Item from "./Item";

const ItemGroupContext = createContext();

function ItemGroup({ children, currentId, onSelect }) {
  const value = useMemo(() => ({ currentId, onSelect }), [currentId, onSelect]);
  return (
    <ItemGroupContext.Provider value={value}>
      {children}
    </ItemGroupContext.Provider>
  );
}

export function useItemGroup() {
  const value = useContext(ItemGroupContext);
  if (value === undefined) {
    throw new Error("useItemGroup");
  }
  return value;
}

function App() {
  const [currentId, setCurrentId] = useState(1);
  return (
    <div>
      <ItemGroup currentId={currentId} onSelect={setCurrentId}>
        <Item id={1}>1</Item>
        <Item id={2}>2</Item>
        <Item id={3}>3</Item>
      </ItemGroup>
    </div>
  );
}

export default App;
