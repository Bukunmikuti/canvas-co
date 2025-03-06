import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

export const firebaseErrorMap = (errorCode) => {
  console.log(errorCode);
  switch (errorCode) {
    case "auth/email-already-in-use":
      return "Email already exists. Please sign in.";
    case "auth/invalid-email":
      return "Invalid email. Please try again.";
    case "auth/weak-password":
      return "Weak password. Please try again.";
    case "auth/user-not-found":
      return "User not found. Please sign up.";
    case "auth/wrong-password":
      return "Wrong password. Please try again.";
    case "auth/invalid-credential":
      return "Email or password is incorrect";
    case "auth/too-many-requests":
      return "Too many requests. Try again later.";
    default:
      return "An error occurred. Please try again.";
  }
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
    throw error
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
    throw error
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
    throw error
  }
};

export const emailVerification = async (auth, user) => {
  try {
    await sendEmailVerification(auth.currentUser);
    window.localStorage.setItem("emailForSignIn", user.email);
  } catch (error) {
    throw error
  }
};

export const resetPassword = async (auth, email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    // password reset email sent!
  } catch (error) {
    throw error
  }
};

export const signout_user = async (auth) => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error
  }
};
