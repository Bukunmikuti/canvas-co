<template>
  <div id="verify">
    <img src="/img/mail.png" alt="logo" />
    <h1>{{ title }}</h1>
    <p>
      {{ instruction }} <br /><br />
      Wrong address? go back to
      <NuxtLink :to=link.url>{{ link.text }}</NuxtLink> and enter your email again.
    </p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth-layout",
  middleware: ["verify-guard"],
});

const { query } = useRoute();
console.log(query.page);

const title = computed(() => {
  return query.page === "reset" ? "Reset Password" : "Email Verification";
});

const instruction = computed(() => {
  if (query.page === "reset") {
    return "Click on the link we sent to your email to reset your password if the account exists.";
  } else {
    return "Click on the link we sent to your email to verify your email address and finsh the account setup.";
  }
});

const link = computed(() => {
  if (query.page === "reset") {
    return { url: "/auth/reset", text: "Reset Password" };
  } else {
    return { url: "/auth/signup", text: "Sign up" };
  }
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
    color: #b3b9c4;
    max-width: 450px;
  }

  a {
    color: #753c90;
    font-weight: bold;
  }
}
</style>
