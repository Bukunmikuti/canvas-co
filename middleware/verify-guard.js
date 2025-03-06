export default defineNuxtRouteMiddleware(async (to, from) => {
    // Check if the route is 'auth/verify' and has a query parameter 'page' with the value 'reset'
    if (to.path === '/auth/verify' && to.query.page === 'reset') {
        return;
    }

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
