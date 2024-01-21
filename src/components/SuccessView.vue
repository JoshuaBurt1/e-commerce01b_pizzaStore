<template>
  <div>
    <header class="header-text"><h2>Payment processed</h2></header>
    <button @click="returnHome" id="returnHome">Return to Homepage</button>
  </div>
</template>

<script>
export default {
  methods: {
    returnHome() {
      // Use this.$router to navigate to the homepage
      this.$router.push({ path: '/' });
    }
  }
}
</script>

<style>
.header-text {
  margin-bottom: 10px;
  color: limegreen;
}
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  background-image: url(https://static.wixstatic.com/media/ba2cd3_ec56b34e45e24ad1ad14a165a939edd9~mv2.jpg/v1/fill/w_1381,h_845,al_b,q_85,enc_auto/ba2cd3_ec56b34e45e24ad1ad14a165a939edd9~mv2.jpg);
  background-size: cover;
  color: white;
  font-size: 16px;
}
</style>
