<template>
  <div>
    <NuxtLoadingIndicator />
    <AppHeader />
    <div class="min-h-screen">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
