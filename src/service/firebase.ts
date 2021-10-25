import "../config/firebase";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

export function signInWithGoogle(onSuccess: onSignInSuccessFunction) {
  const auth = getAuth();
  const googleAuthProvider = new GoogleAuthProvider();
  googleAuthProvider.addScope("https://www.googleapis.com/auth/userinfo.email");
  googleAuthProvider.addScope("openid");
  googleAuthProvider.addScope("https://www.googleapis.com/auth/userinfo.profile");

  signInWithPopup(auth, googleAuthProvider)
    .then((res) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential?.accessToken;

      // The signed-in user info.
      const user = res.user;
      // user.getIdToken(true).then(res => {
      //
      // })
      onSuccess(user, token);
    })
    .catch((err) => {
      console.error(err);
    });
}
