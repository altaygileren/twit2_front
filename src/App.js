import "./App.css";
// Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Context
import { UserContextProvider } from "./utils/UserContext";
import { TokenContextProvider } from "./utils/TokenContext";
import { ResumeLocalContextProvider } from "./utils/ResumeLocalSession";
// Layout
import Header from "./components/layout/header/header";
import Home from "./components/layout/home/home";
import Footer from "./components/layout/footer/footer";
// Pages
import About from "./components/layout/pages/about/about";
import Profile from "./components/layout/pages/profile/profile";

const App = () => {
  return (
    <TokenContextProvider>
      <ResumeLocalContextProvider />
      <UserContextProvider>
        <div className="App">
          <Router>
            <Header />
            <div className="body-padding">
              <Switch>
                <Route component={Home} exact path="/" />
                <Route component={About} exact path="/about-project" />
                <Route component={Profile} exact path="/user-profile" />
              </Switch>
            </div>
            <Footer />
          </Router>
        </div>
      </UserContextProvider>
    </TokenContextProvider>
  );
};

export default App;
