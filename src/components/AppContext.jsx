import React, { createContext, useState} from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [active, setActive] = useState(true);

  return(
    <AppContext.Provider value={{active, setActive}}>
      {children}
    </AppContext.Provider>
);
}

export { AppContext, AppProvider };