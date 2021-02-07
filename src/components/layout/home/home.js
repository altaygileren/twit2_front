import React, { useContext, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Parallaximg from "../comps/parallax";
import twitpicnic from "../../../imgs/twit-picnic.jpg";
import party from "../../../imgs/party.jpg";
import Signup from "../../auth/signup/signup";
import Mostrecenttwits from "../comps/most.recent.twits";
import { UserContext } from "../../../utils/UserContext";
import Userhome from "../userhome/user.home";
import { retrieveItems } from "../../../utils";

const Home = () => {
  const { user, loading, setLoading } = useContext(UserContext);
  const [twits, setTwits] = useState([]);

  useEffect(() => {
    const findRecent = async () => {
      const findTwits = await retrieveItems("twits/mostrecent");
      setTwits(findTwits);
    };
    findRecent();
  }, []);
  return user !== null ? (
    <Userhome />
  ) : (
    <div>
      <Parallaximg img={twitpicnic} text={"hey there"} />
      <Row>
        <Col lg={6}>
          <h4>Welcome to the #1 social media site</h4>
          <p className="text-left">
            Currently because you're not logged in you can only see the 10 most
            recent twits. Once you sign up you will be able to create Twits and
            see all of them
          </p>
          <div className="scrollable-div">
            <Mostrecenttwits twits={twits} />
          </div>
        </Col>
        <Col lg={6}>
          <Signup />
        </Col>
      </Row>
      <Parallaximg img={party} text="hi" />
    </div>
  );
};

export default Home;
