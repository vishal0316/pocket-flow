import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import pocketFlowSvg from "../../asset/money.svg";

import "./style.css";

export const Auth = () => {
  let navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  const SignInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: result.user.uid,
      name: result.user.displayName,
      profilePhoto: result.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/expense-tracker");
  };

  if (isAuth) {
    return <Navigate to="/expense-tracker" />;
  }

  return (
    <div className="login-page">
      <div className="logoandsvg">
        <div className="logo"> Pocket Flow</div>
        <img src={pocketFlowSvg} alt="Pocket Flow Logo" className="logo-svg" />
      </div>
      <p>Sign In With Google to Continue...</p>

      <button className="login-with-google-btn" onClick={SignInWithGoogle}>
        {" "}
        Sign In With Google{" "}
      </button>
    </div>
  );
};
