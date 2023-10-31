<template>
  <div class="load">
    <div class="rectangle"></div>
    <div class="rectangle"></div>
    <div class="rectangle"></div>
    <div class="rectangle"></div>
    <div class="rectangle"></div>
  </div>
</template>

<style>
:root {
  --bg-dark: rgba(255, 94, 0, 0.932);
}

.load {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.load .rectangle:nth-child(1),
.load .rectangle:nth-child(5) {
  width: 8px;
  height: 0;
  background: var(--bg-dark);
  border-radius: 5px;
  animation: tall 0.3s linear 0.4s infinite alternate;
}
.load .rectangle:nth-child(2),
.load .rectangle:nth-child(4) {
  width: 8px;
  height: 0;
  background: var(--bg-dark);
  border-radius: 5px;
  animation: tall 0.3s linear 0.2s infinite alternate;
}
.load .rectangle:nth-child(3) {
  width: 8px;
  height: 0;
  background: var(--bg-dark);
  border-radius: 5px;
  animation: tall 0.3s linear infinite alternate;
}

@keyframes tall {
  from {
    height: 20px;
  }
  to {
    height: 60px;
  }
}
</style>
