import { useItemGroup } from "./App";

function Item({ children, id }) {
  const activeStyle = {
    backgroundColor: "black",
    color: "white",
  };

  const style = {
    cursor: "pointer",
    padding: "1rem",
  };

  const { currentId, onSelect } = useItemGroup();
  console.log(currentId, onSelect);

  return (
    <div
      style={currentId === id ? { ...style, ...activeStyle } : style}
      onClick={() => onSelect(id)}
    >
      {children}
    </div>
  );
}

export default Item;
