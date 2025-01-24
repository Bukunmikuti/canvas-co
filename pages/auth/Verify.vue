<template>
  <div id="verify">
    <img src="/img/mail.png" alt="logo" />
    <h1>Email Verification</h1>
    <p>
      Click on the link we sent to your inbox to verify your email address and finsh the account setup. <br/><br/>
      Wrong address? go back to <NuxtLink to="/signup">sign up</NuxtLink> and enter your email again.
    </p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});
</script>

<style scoped lang="less">
#verify {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 100px;
    height: 100px;
  }

  h1 {
    margin-top: 20px;
  }

  p {
    text-align: center;
    margin-top: 0;
    color: #B3B9C4;
    max-width: 500px;
  }

  a {
    color: #753c90;
    font-weight: bold;
  }
}
</style>
