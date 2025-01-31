<template>
  <div id="verify">
    <img src="/img/mail.png" alt="logo" />
    <h1>Email Verification</h1>
    <p>
      Click on the link we sent to your inbox to verify your email address and
      finsh the account setup. <br /><br />
      Wrong address? go back to
      <NuxtLink to="/auth/signup">sign up</NuxtLink> and enter your email again.
    </p>
  </div>
</template>

<script setup>
import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
definePageMeta({
  layout: "auth",
  middleware: [
    "auth",
    async () => {
      const user = await getCurrentUser();
      if (user.emailVerified) {
        /* Take user to dashboard */
        //return redirect('/dashboard');
      }
    },
  ],
});

const completeVerification = async () => {
  const user = getCurrentUser()
  console.log(user, user.emailVerified)
  const auth = getAuth();
  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
    }
    try {
      await signInWithEmailLink(auth, email, window.location.href);
      window.localStorage.removeItem("emailForSignIn");
      console.log(email)
      // verification completed
      //return redirect('/dashboard');
    } catch (error) {
      console.error(error);
    }
  }
};

onMounted(() => {
  completeVerification();
});

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "https://ezer.pages.dev/dashboard",
  handleCodeInApp: true,
};
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
    max-width: 500px;
  }

  a {
    color: #753c90;
    font-weight: bold;
  }
}
</style>
