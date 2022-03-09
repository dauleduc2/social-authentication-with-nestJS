import React from "react";
import { useGoogleOneTapLogin } from "react-google-one-tap-login";
import { IGoogleEndPointResponse } from "react-google-one-tap-login/dist/types/types";
function App() {
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<IGoogleEndPointResponse>();

  useGoogleOneTapLogin({
    onError: (error) => console.log(error),
    onSuccess: (response) => {
      setIsLogin(true);
      setUser(response);
    },
    disableCancelOnUnmount: true,
    // https://developers.google.com/identity/gsi/web/reference/js-reference#IdConfiguration for more info
    googleAccountConfigs: {
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID || "",
      auto_select: true,
      cancel_on_tap_outside: true,
    },
  });

  return (
    <div className="App">
      {isLogin ? JSON.stringify(user) : "you are not login yet"}
    </div>
  );
}

export default App;
