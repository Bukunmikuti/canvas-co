export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = await getCurrentUser();
    // If the user is not signed in, redirect to the login page
    if (!user) {
        return navigateTo({ path: "/auth/login" });
    }
    // If the user is signed in and their email is verified, redirect to the dashboard
    if (user.emailVerified) {
        return navigateTo({ path: "/dashboard" });
    }
    // Otherwise, do nothing and allow the user to access the current page
});
