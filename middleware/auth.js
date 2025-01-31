export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await getCurrentUser();
  // redirect the user to the login page
  //console.log("user", user);
  if (!user) {
    console.log("not signed in");
    return navigateTo({ path: "/auth/login" });
  } else if (!user.emailVerified && to.path !== "/auth/verify") {
    console.log("email not verified");
    return navigateTo({ path: "/auth/verify" });
  } else if (user.emailVerified) {
    console.log("email verified");
    return navigateTo({ path: "/dashboard" });
  }
});
