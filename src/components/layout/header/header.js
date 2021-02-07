import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../../utils/UserContext";
import { TokenContext } from "../../../utils/TokenContext";
import "./header.style.css";

const Header = () => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const { setUserToken } = useContext(TokenContext);

  const logOutBtn = async () => {
    localStorage.removeItem("jwt");
    sessionStorage.removeItem("jwt");
    setUser(null);
    history.push("/");
  };
  return (
    <Navbar fixed="top"  className="header-container">
      <Navbar.Brand className="header-logo" href="/">
        twit
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-auto">
          <Link to="/about-project">About This Project</Link>
        </Nav>
        <Navbar.Text>
          {user ? (
            <>
              <Link to={`/user-profile`}>{user.username}</Link>
              <Button variant="danger" size="sm" onClick={() => logOutBtn()}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
