import { useMyContext } from "./App";

const Button = () => {
  const [, actions] = useMyContext();
  return (
    <>
      <div onClick={actions.increase}>+</div>
      <div onClick={actions.decrease}>-</div>
    </>
  );
};

export default Button;
