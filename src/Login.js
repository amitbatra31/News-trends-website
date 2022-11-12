import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./index.css";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <React.Fragment className="">
      <div className="log-btn-div">
        <button
          className="mx-auto rounded-lg border-0 bg-yellow-100 login-btn"
          onClick={() => loginWithRedirect()}
        >
          LOG IN
        </button>
      </div>
    </React.Fragment>
  );
};

export default LoginButton;
