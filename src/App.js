// import { createContext, useContext } from 'react';
// import One from './One';
// export const MyContext = createContext();

// export function useMyContext() {
//   return useContext(MyContext);
// }

// function App() {
//   return (
//     <MyContext.Provider value="Hello World">
//       <One />
//     </MyContext.Provider>
//   );
// }

// export default App;

import UseInput from "./UseInput";

function App() {
  const [text, setText] = UseInput({
    email: "",
    password: "",
  });

  return (
    <>
      <input id="email" value={text.email} onChange={setText} />
      <input id="password" value={text.password} onChange={setText} />
    </>
  );
}

export default App;
