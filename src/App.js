import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const onClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div>
        <button onClick={onClick}>Show</button>
        <button onClick={onClick}>Hide</button>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
