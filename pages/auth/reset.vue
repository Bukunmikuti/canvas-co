<template>
  <div id="reset">
    <h1>Reset Password</h1>
    <div class="wrapper">
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
        <button id="submit" @click.prevent="reset">Continue</button>
        <NuxtLink to="/auth/signup" id="signup-link"
          >Don't have an account? Sign up</NuxtLink
        >
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth-layout",
});

const errorMessage = ref(false);
const email = ref("");
const auth = useFirebaseAuth();

const reset = async () => {
  try {
    await resetPassword(auth, email.value);
    return navigateTo({
      path: "/auth/verify",
      query: {
        page: 'reset',
      },
    });
  } catch (error) {
    console.log(error);
    errorMessage.value = error.message;
  }
};
</script>

<style scoped lang="less">
#reset {
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
</style>
