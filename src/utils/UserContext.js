import React, { createContext, useState, useEffect } from "react";
import { getToken } from "./index";
import axios from "axios";

export const UserContext = createContext({});

export const UserContextProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (getToken() !== null) {
      axios
        .get(`${process.env.REACT_APP_BASE}/api/users`, {
          headers: {
            "Content-type": "application/json",
            "x-auth-token": getToken(),
          },
        })
        .then((res) => {
          setUser(res.data);
          setLoading(false);
        });
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {props.children}
    </UserContext.Provider>
  );
};
