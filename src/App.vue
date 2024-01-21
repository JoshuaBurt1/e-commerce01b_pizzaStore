<template>
  <div class="app-container">
    <img alt="Vue logo" src="./assets/logo.png" class="logo">
    <router-view/>
  </div>
</template>

<style>
.logo {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center-align the logo */
  z-index: 1;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  color: white; 
  margin-top: 60px; /* Adjust the margin-top value to create space for the logo */
}

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  background-image: url(https://static.wixstatic.com/media/ba2cd3_ec56b34e45e24ad1ad14a165a939edd9~mv2.jpg/v1/fill/w_1381,h_845,al_b,q_85,enc_auto/ba2cd3_ec56b34e45e24ad1ad14a165a939edd9~mv2.jpg);
  background-size: cover;
  color: white;
  font-size: 16px;
}
</style>