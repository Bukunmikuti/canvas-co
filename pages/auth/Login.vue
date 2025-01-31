<template>
  <div id="login">
    <div class="wrapper">
      <div id="header">
        <img src="../../public/img/logo.svg" alt="login" />
        <NuxtLink id="signup-btn" to="signup">Create an account</NuxtLink>
      </div>
      <div class="title">
        <h2>Login</h2>
        <p>Sign in if you already have an account</p>
      </div>

      <div id="form-wrapper">
        <button id="google">
          <Icon name="flat-color-icons:google" size="25"></Icon>
          Continue with Google
        </button>
        <div id="divider"><span>OR</span></div>
        <form id="account-form">
          <p id="error" v-show="errorMessage">
            Your email or password is incorrect. Please try again.
          </p>
          <div>
            <label for="email">What's your email?</label>
            <input type="email" id="email" placeholder="you@example.com" />
          </div>
          <div>
            <label for="password">Create a Password</label>
            <input type="password" id="password" placeholder="Input password" />
          </div>
          <!-- <div>
        <label for="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Input password"
        />
      </div> -->
          <button id="submit" @click.prevent="toVerify">Sign Up</button>
        </form>
      </div>
    </div>
    <!-- <div class="side-design">
      <img src="../../public/img/login-image.svg" alt="login" />
    </div> -->
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

const toVerify = () => {
  //return navigateTo("auth/verify");
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
  //display: grid;
  //grid-template-columns: 1fr minmax(auto, 40%);
  //justify-content: flex-start;
}

.wrapper {
  width: 100%;
  height: 100%;
  max-width: 600px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  #header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #signup-btn {
      font-size: 1.65rem;
      margin-top: 0px;
      color: #753c90;
      font-weight: bold;
    }
  }

  .title {
    margin-top: 50px;
    p {
      color: #b3b9c4;
    }
  }
}

#form-wrapper {
  margin-top: 20px;
  //max-width: 400px;
  #google {
    width: 100%;
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
