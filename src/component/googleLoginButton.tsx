import React from "react";

import { url } from "../config/googleAuth";

const GoogleLoginButton = () => {
  return (
    <a href={url} className="btn btn-success" type="button">
      Login with Google
    </a>
  );
};

export default GoogleLoginButton;
