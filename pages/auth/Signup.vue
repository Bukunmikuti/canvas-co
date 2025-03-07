<template>
  <div id="signup">
    <h1>Create an Account</h1>

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
      <!-- Form to collect user signup details -->
      <form id="account-form">
        <p id="error" v-show="errorMessage">
          {{ errorMessage }}
        </p>
        <div>
          <label for="email">Email?</label>
          <input
            v-model="email"
            type="email"
            id="email"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="Input password"
          />
        </div>
        <button id="submit" @click.prevent="signup">
          <Icon v-if="isLoading" name="codex:loader" size="40px"></Icon>
          <span v-else>Sign Up</span>
        </button>

        <NuxtLink to="/auth/login" id="login-link"
          >Already have an account? Log in</NuxtLink
        >
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth-layout",
  middleware: ["login-guard"],
});

const email = ref("");
const password = ref("");
const errorMessage = ref(false);
const isLoading = ref(false);
const auth = useFirebaseAuth();

const signup = async () => {
  if (!email.value || !password.value) {
    errorMessage.value = "Please enter a valid email and password";
    return;
  }

  try {
    isLoading.value = true;
    const user = await signup_email(auth, email.value, password.value);
    isLoading.value = false;
    return navigateTo("/auth/verify");
  } catch (error) {
    isLoading.value = false;
    errorMessage.value = firebaseErrorMap(error.code);
  }
};

const useGoogle = async () => {
  try {
    const user = await signin_with_google(auth);
    console.log(user);
    return navigateTo("/dashboard");
  } catch (error) {
    errorMessage.value = firebaseErrorMap(error.code);
  }
};
</script>

<style scoped lang="less">
#signup {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
}

h1 {
  font-weight: 500;
  letter-spacing: -2px;
  font-size: 3.7rem;
}

.wrapper {
  width: 100%;
  max-width: 400px;
  padding: 0 20px;
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
      font-size: 1.6rem;
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
    margin-top: 10px;
    color: inherit;
  }

  #submit {
    width: 100%;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
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

#login-link {
  font-weight: 500;
  text-align: center;
  margin-top: 10px;
  color: inherit;
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

#providers {
  margin-top: 30px;
  #google {
    width: 100%;
    padding: 12px 15px;
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
</style>
