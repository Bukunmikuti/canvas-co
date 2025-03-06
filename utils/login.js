import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth";

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:3000/auth/verify",
  handleCodeInApp: true,
};
const provider = new GoogleAuthProvider();

export const signup_email = async (auth, email, password) => {
  try {
    console.log(auth);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await emailVerification(auth, user);
    return user;
  } catch (error) {
    throw new Error("An error occurred. Please try again.");
  }
};

export const signin_email = async (auth, email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw new Error("An error occurred. Please try again.");
  }
};

export const signin_with_google = async (auth) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    return user;
  } catch (error) {
    throw new Error("An error occurred. Please try again.");
  }
};

export const emailVerification = async (auth, user) => {
  try {
    await sendEmailVerification(auth.currentUser);
    window.localStorage.setItem("emailForSignIn", user.email);
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const resetPassword = async (auth, email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    // password reset email sent!
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export const signout_user = async (auth) => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
    throw new Error("An error occurred. Please try again.");
  }
}

