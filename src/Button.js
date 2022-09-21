import { useCounterActions } from "./App";

const Button = () => {
  const actions = useCounterActions();
  return (
    <>
      <div onClick={actions.increase}>+</div>
      <div onClick={actions.decrease}>-</div>
    </>
  );
};

export default Button;
