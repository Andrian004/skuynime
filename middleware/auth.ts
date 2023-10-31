export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id.length !== 0) {
    if (to.path !== "/login") {
      return navigateTo("/login");
    }
  }
});
