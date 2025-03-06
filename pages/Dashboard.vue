<template>
  <div>
    <h1>Dashboard</h1>
    <p>{{ welcome() }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>

definePageMeta({
  middleware: ['dashboard-guard'],
});

const auth = useFirebaseAuth();

const welcome = () => {
  const user = useCurrentUser();
  if (user.value.displayName) {
    return `Welcome ${user.value.displayName}, your email is ${user.value.email}`;
  } else {
    return `Welcome, your email is ${user.value.email}`;
  }
};

const logout = async () => {
  await signout_user(auth);
  navigateTo("/auth/login");
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

button {
  padding: 10px 20px;
  background-color: #753c90;
  color: white;
}
</style>
