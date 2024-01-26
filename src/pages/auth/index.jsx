import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import pocketFlowSvg from "../../asset/money.svg";

import "./style.css";

export const Auth = () => {
  let navigate = useNavigate();

  const SignInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: result.user.uid,
      name: result.user.displayName,
      profilePhoto: result.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/expence-tracker");
  };

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
