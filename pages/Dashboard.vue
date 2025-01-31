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
      if (!user) {
        return navigateTo("/auth/login");
      }
    },
  ],
});

const welcome = () => {
  const user = useCurrentUser();
  if (user.value.displayName) {
    return `Welcome ${user.value.displayName}, your email is ${user.value.email}`;
  } else {
    return `Welcome, your email is ${user.value.email}`;
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
