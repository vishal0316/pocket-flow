import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
export const Auth = () => {
  const SignInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: result.user.uid,
      name: result.user.displayName,
      profilePhoto: result.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
  };

  return (
    <div className="login-page">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={SignInWithGoogle}>
        {" "}
        Sign In With Google{" "}
      </button>
    </div>
  );
};
