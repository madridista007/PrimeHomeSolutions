<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

#app {
  text-align: center;
  padding-top: 80px; /* 👈 Add this line */
}
/* App.vue or main layout */
#app {
  padding-top: 70px; /* match navbar height */
}
</style>
