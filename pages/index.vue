<template>
  <div id="container">
    <img ref="logo-mark" id="logo-mark" src="/img/logo-mark.svg" />
    <div id="content" ref="content" v-show="isContent">
      <img id="logo" src="/img/logo.svg" />
      <p>
        The one-stop platform for all your business design and
        <span>creative needs.</span>
      </p>
    </div>
    <button v-show="isContent" @click="toAuth">Get Started Now</button>
  </div>
</template>

<script setup>
const logoMark = templateRef("logo-mark");
const isContent = ref(false);

definePageMeta({
  layout: 'auth-layout',
})

onMounted(() => {
  setTimeout(() => {
    logoMark.value.style.display = "none";
    isContent.value = true;
  }, 900);
});

const toAuth = () => {
  return navigateTo("/auth/signup");
};
</script>

<style scoped lang="less">
#container {
  position: relative;
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Okine Sans", sans-serif;
}

#content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  color: #535353;

  p {
    font-weight: 450;
    text-align: center;
    font-size: 1.9rem;
    margin-top: 10px;

    span {
      display: inline-block;
      padding: 4px 10px;
      background: rgb(245, 223, 231);
      border-radius: 5px;
      animation: bg 40s infinite;
      margin-top: 5px;

      @keyframes bg {
        0% {
          background: rgb(245, 235, 223);
        }
        25% {
          background: rgb(223, 223, 245);
        }
        50% {
          background: rgb(223, 245, 237);
        }
        75% {
          background: rgb(231, 245, 223);
        }
        100% {
          background: rgb(245, 223, 231);
        }
      }
    }
  }

  #logo {
    width: 250px;
  }
}

#logo-mark {
  width: 70px;
  height: 70px;
  animation: rotate 4s linear forwards;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

button {
  position: absolute;
  bottom: 30px;
  padding: 12px 40px;
  border-radius: 7px;
  font-weight: 500;
  background: #a900ff;
  color: white;
  font-size: 1.6rem;

  &:hover {
    background: #8a00cc;
  }
}
</style>
