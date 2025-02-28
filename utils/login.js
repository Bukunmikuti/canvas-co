import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:3000/auth/verify",
  handleCodeInApp: true,
};
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signup_email = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const user = userCredential.user;
    await emailVerification(user);
    return user;
  } catch (error) {
    throw new Error("An error occurred. Please try again.");
  }
};

export const signin_email = async (email, password) => {
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

export const signin_with_google = async () => {
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

export const emailVerification = async (user) => {
  try {
    await sendEmailVerification(auth.currentUser);
    window.localStorage.setItem("emailForSignIn", user.email);
  } catch (error) {
    console.log(error);
  }
};
