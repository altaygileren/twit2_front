import React, { createContext, useState, useMemo } from 'react';

export const TokenContext = createContext();

export const TokenContextProvider = (props) => {
  const [userToken, setUserToken] = useState(null);

  const tokenContextValue = useMemo(() => ({ userToken, setUserToken }), [userToken, setUserToken]);
  return (
    <TokenContext.Provider value={tokenContextValue}>
      {props.children}
    </TokenContext.Provider>
  )
}