<template>
  <div id="auth-layout">
    <div class="sidebar">
      <div class="img-wrapper">
        <div class="overlay">
          <p class="text">
            Enter, Explore,<br />
            Customize and<br />
            Make It Yours
          </p>
        </div>
        <img src="/img/login.jpg" alt="auth" />
      </div>
    </div>
    <div class="page">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
#auth-layout {
  width: 100%;
  height: 100vh;
  font-family: "Poppins", sans-serif;
  display: grid;
  grid-template-columns: 1fr minmax(auto, 40%);
}

.sidebar {
  padding: 20px;
  //background: red;
}

.page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;

  .text {
    padding: 30px 40px;
    font-weight: 700;
    font-size: 4.7rem;
    color: white;
    font-family: Poppins, sans-serif;
    line-height: 1.3;
    letter-spacing: -0.8px;
  }
}
</style>
