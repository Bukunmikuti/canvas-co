<template>
  <div id="login">
    <h1>Login</h1>
    <div class="wrapper">
      <div id="providers">
        <button id="google" @click="useGoogle">
          <Icon name="flat-color-icons:google" size="27px"></Icon>
          <span>Sign in with Google</span>
        </button>
      </div>
      <div id="divider">
        <span>or</span>
      </div>
      <form id="account-form" @submit="login">
        <div v-if="errorMessage" id="error">{{ errorMessage }}</div>
        <div>
          <label for="email">Email</label>
          <input
            placeholder="name@example.com"
            type="email"
            id="email"
            v-model="email"
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            placeholder="password"
            type="password"
            id="password"
            v-model="password"
          />
          <p id="forget-pwd"><NuxtLink to="#">Forgot password?</NuxtLink></p>
        </div>
        <button id="submit" @click="login">Login</button>
        <NuxtLink to="/auth/signup" id="signup-link">Don't have an account? Sign up</NuxtLink>
      </form>
    </div>
  </div>
</template>

<script setup>
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
const errorMessage = ref(false);
definePageMeta({
  layout: "auth",
  middleware: [
    async () => {
      const user = await getCurrentUser();
      if (user) {
        return navigateTo("/dashboard");
      }
    },
  ],
});

const useGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
    return navigateTo("/dashboard");
  } catch (error) {
    console.log(error);
    errorMessage.value = "An error occurred. Please try again.";
  }
  // Implement Google Sign Up
};
</script>

<style scoped lang="less">
#login {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;

  h1 {
    font-weight: 500;
    letter-spacing: -2px;
    font-size: 3.7rem;
  }
}

.wrapper {
  width: 100%;
  max-width: 400px;
  padding: 20px;
}

#providers {
  #google {
    width: 100%;
    padding: 10px 15px;
    font-size: 1.6rem;
    border-radius: 30px;
    background-color: #e5e5e5;
    color: rgb(36, 21, 43);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin-right: 10px;
      font-weight: 500;
    }

    &:hover {
      background: darken(#e5e5e5, 10%);
    }
  }
}

#account-form {
  width: 100%;
  max-width: 600px;
  margin: 15px 0;
  //padding: 20px;
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
    margin-bottom: 10px;

    label {
      font-size: 1.6rem;
      color: #383838;
      font-weight: 500;
      display: block;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      padding: 15px 20px;
      font-size: 1.4rem;
      background: #e5e5e5;
      color: inherit;
      border-radius: 30px;
      border: none;
      outline: none;

      &:focus {
        border-color: #8a8a8a;
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        color: white !important;
      }
    }
  }

  #forget-pwd {
    margin-top: 10px;
    color: #a63bbe;
    font-weight: 500;
    text-align: right;
    padding: 0 10px;

    a {
      color: inherit;
      font-weight: 500;
    }
  }

  #signup-link {
    font-weight: 500;
    text-align: center;
    margin-top: 20px;
    color: #a63bbe;
  }

  #submit {
    width: 100%;
    padding: 12px;
    font-size: 1.7rem;
    border: none;
    border-radius: 30px;
    background-color: #b300df;
    color: #fff;
    cursor: pointer;
    margin-top: 5px;

    &:hover {
      background: #9501b9;
    }
  }
}

#divider {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  font-size: 1.6rem;
  color: #212225;
  font-weight: 500;
  margin: 15px 0;
}

.side-design {
  display: none;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  //background: red;
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: scale(0.97);
    //transform: translate(50px, 100px);
    border-radius: 15px;
  }
}
</style>
