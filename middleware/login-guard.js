export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await getCurrentUser();
  // If the user is signed in and their email is verified, redirect to the dashboard
  if (user && user.emailVerified) {
    return navigateTo({ path: "/dashboard" });
  }

  // If the user is signed in but their email is not verified, redirect to the verification page
  if (user && !user.emailVerified) {
    return navigateTo({ path: "/auth/verify" });
  }
  // Otherwise, do nothing and allow the user to access the signup or login page
});