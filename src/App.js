import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const variants = {
    inView: {
      opacity: 1,
      rotate: [0, 360],
      borderRadius: ["20%", "50%"],
      transition: { delay: 0.05 },
    },
  };
  return (
    <>
      <div className="space"></div>
      <AnimatePresence>
        <motion.div
          className="box"
          initial={{ opacity: 0.2 }}
          whileInView="inView"
          whileHover={{
            scale: 1.2,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          variants={variants}
        />
      </AnimatePresence>
    </>
  );
}

export default App;
