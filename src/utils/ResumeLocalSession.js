import { createContext, useContext, useEffect } from "react";
import { TokenContext } from "./TokenContext";

export const ResumeLocalSession = createContext();

export const ResumeLocalContextProvider = () => {
  const { userToken, setUserToken } = useContext(TokenContext);

  useEffect(() => {
    setUserToken(localStorage.getItem("jwt"));
  }, []);
  return null;
};
