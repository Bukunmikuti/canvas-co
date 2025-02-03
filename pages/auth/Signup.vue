<template>
  <div id="signup">
    <div class="title">
      <h2>Create an Account</h2>
      <p>Already have an account? <NuxtLink to="login">Log in</NuxtLink></p>
    </div>

    <!-- Form to collect user signup details -->
    <form id="account-form">
      <p id="error" v-show="errorMessage">
        {{ errorMessage }}
      </p>
      <div>
        <label for="email">What's your email?</label>
        <input
          v-model="email"
          type="email"
          id="email"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label for="password">Create a Password</label>
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="Input password"
        />
      </div>
      <button id="submit" type="submit" @click.prevent="signUp">Sign Up</button>
      <div id="divider"><span>OR</span></div>

      <!-- Sign up with Google Button -->
      <button id="google" @click.prevent="useGoogle">
        <Icon name="flat-color-icons:google" size="25"></Icon>
        Continue with Google
      </button>
    </form>
  </div>
</template>

<script setup>
import { getAuth, createUserWithEmailAndPassword, sendSignInLinkToEmail, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
definePageMeta({
  layout: "auth",
  middleware: [
    async () => {
      const user = await getCurrentUser();
      if (user) {
        return navigateTo("/dashboard");
      }
    },
  ]
});
const email = ref("");
const password = ref("");
const errorMessage = ref(false);
const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'http://localhost:3000/auth/verify',
  handleCodeInApp: true,
};
const auth = getAuth();

const signUp = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    await sendEmailVerification(user);
    return navigateTo("/auth/verify");
  } catch (error) {
    errorMessage.value = "An error occurred. Please try again.";
    console.log(error)
  }
}

const sendEmailVerification = async (user) => {
  try {
    await sendSignInLinkToEmail(auth, user.email, actionCodeSettings);
    window.localStorage.setItem('emailForSignIn', user.email);
  } catch (error) {
    console.log(error);
  }
}

const useGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user)
    return navigateTo("/dashboard");
  } catch (error) {
    console.log(error);
    errorMessage.value = "An error occurred. Please try again.";
  }
  // Implement Google Sign Up
}
</script>

<style scoped lang="less">
#signup {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title {
  text-align: center;
  h2 {
    font-size: 2.2rem;
    margin-bottom: 0;
  }
  p {
    font-size: 1.5rem;
    color: #b3b9c4;
    margin-top: 0px;
    a {
      color: #753c90;
      font-weight: bold;
    }
  }
}

#account-form {
  width: 100%;
  max-width: 600px;
  margin: 15px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;

  #error {
    width: 100%;
    padding: 5px 10px;
    border-radius: 5px;
    background: rgb(245, 232, 232);
    color: #e25555;
    font-size: 1.6rem;
    margin-bottom: 10px;
  }

  div {
    margin-bottom: 15px;

    label {
      font-size: 1.6rem;
      color: #b3b9c4;
      display: block;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      padding: 10px;
      font-size: 1.4rem;
      border: 3px solid #d7d7d7;
      color: inherit;
      border-radius: 5px;
      outline: none;

      &:focus {
        border-color: #8a8a8a;
      }
    }
  }

  #submit {
    width: 100%;
    padding: 10px;
    font-size: 1.6rem;
    border: none;
    border-radius: 5px;
    background-color: #a900ff;
    color: #fff;
    cursor: pointer;
    margin-top: 5px;

    &:hover {
      background: #8a00cc;
    }
  }
}

#divider {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  text-align: center;
  font-size: 1.6rem;
  color: #b3b9c4;
  margin: 25px 0;

  span {
    padding: 0 10px;
    font-weight: bold;
  }

  &:before,
  &:after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #dbdbdb;
  }
}

#google {
  padding: 10px 15px;
  font-size: 1.6rem;
  border: 3px solid #d1d1d1;
  border-radius: 7px;
  background-color: #fff;
  color: #220033;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-right: 10px;
  }

  &:hover {
    background: #f5f5f5;
  }
}
</style>
