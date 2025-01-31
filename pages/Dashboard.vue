<template>
  <div>
    <h1>Dashboard</h1>
    <p>{{ welcome() }}</p>
  </div>
</template>

<script setup>
import { getCurrentUser } from "vuefire";
const dem = ref({
  user: {
    displayName: "John Doe",
    email: "",
  },
});

definePageMeta({
  middleware: [
    async () => {
      const user = await getCurrentUser();
      console.log(user.email, "ok");
      if (!user.email) {
        return navigateTo("/auth/login");
      }
    },
  ],
});

const welcome = () => {
  const user2 = useCurrentUser();
  console.log(user2.value.email);
  if (user2.value.displayName) {
    return `Welcome ${user2.value.displayName}, your email is ${user2.value.email}`;
  } else {
    return `Welcome, your email is ${user2.value.email}`;
  }
};
</script>

<style scoped lang="less">
div {
    padding: 30px;
}
h1 {
  font-size: 3rem;
  color: #313131;
}
</style>
