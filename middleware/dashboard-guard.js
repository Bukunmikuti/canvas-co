export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = await getCurrentUser();
    // If the user is not signed in, redirect to the login page
    if (!user) {
        return navigateTo({ path: "/auth/login" });
    }
    // If the user is signed in but their email is not verified, redirect to the verification page
    if (user && !user.emailVerified) {
        return navigateTo({ path: "/auth/verify" });
    }
    // If the user is signed in and their email is verified, do nothing
});