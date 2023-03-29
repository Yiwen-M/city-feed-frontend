import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { API_KEY, GET_USER_FEED_LIST_URL } from "../../keys";
import { useNavigate } from "react-router-dom";

const getUserFeedListParams = { region: "seattle" };

const Signout = () => {
  const authContext = useContext(AuthContext);
  const [userFeedList, setUserFeedList] = useState([]);

  let navigate = useNavigate();

  const getUserFeedListHandler = async () => {
    const tokenSession = await authContext.getSession();
    const token = tokenSession.idToken.jwtToken;
    console.log("idToken: ----", token);
    const response = await fetch(
      GET_USER_FEED_LIST_URL +
        new URLSearchParams(getUserFeedListParams).toString(),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "x-api-key": API_KEY,
        },
      }
    );

    const data = await response.json();
    console.log("Data: ", data);
    setUserFeedList(data.feedList);
  };

  return (
    <>
      <h3>
        You are signed in now. To go back to this page after navigation, please
        mannualy enter "/login" to the URL.
      </h3>
      <button
        onClick={async () => {
          try {
            await authContext.signOut();
          } catch (err) {}
        }}
      >
        Sign out
      </button>
      <br />
      <button onClick={getUserFeedListHandler}>
        Send request to "/getUserFeedList" (token and data logged to console)
      </button>
      <br />
      <button
        onClick={() => {
          navigate("/discover");
        }}
      >
        Go to Discover page
      </button>
    </>
  );
};

export default Signout;
