<template>
  <div id="auth-layout">
    <div id="pattern"></div>
    <NuxtPage />
  </div>
</template>

<script setup></script>

<style scoped lang="less">
#auth-layout {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
}

#pattern {
  position: absolute;
  top: 0;
  z-index: -1;
  opacity: 0.15;
  width: 100%;
  height: 50%;
  background-image: linear-gradient(#8a00cc 1px, transparent 1px),
    linear-gradient(to right, #8a00cc 1px, transparent 1px);
  background-size: 52px 52px;
  background-color: #ffffff;

  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 90%
    );
    width: 100%;
    height: 10em;
  }
}
</style>
