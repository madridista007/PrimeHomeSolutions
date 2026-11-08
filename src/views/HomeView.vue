<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Welcome to Prime Home Solutions</h1>
      <h3>Modern furniture for your perfect workspace and living room.</h3>
      <p>
        Explore our curated collection of stylish desks, chairs, and decor to
        upgrade your home or office environment.
      </p>
      <button @click="goToShop">Shop Now</button>
    </div>
    <div class="hero-image">
      <img :src="deskImg" alt="Desk" />
    </div>
  </section>
</template>

<script>
import deskImg from "../assets/desk.png";

export default {
  name: "HomeView",
  data() {
    return {
      deskImg,
    };
  },
  methods: {
    goToShop() {
      this.$router.push("/shop");
    },
  },
};
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 2rem;
  background: linear-gradient(to right, #f0f4ff, #fbeec1);
  flex-wrap: wrap;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.hero-image {
  flex: 1;
  min-width: 300px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  width: 100%;
  max-width: 400px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.hero-content {
  flex: 1;
  min-width: 300px;
  padding: 1rem;
  text-align: left;
}

.hero-content h1 {
  font-size: 2.8rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: bold;
}

.hero-content h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #666;
}

.hero-content p {
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #444;
  line-height: 1.6;
}

.hero-content button {
  padding: 0.8rem 2rem;
  font-size: 1rem;
  background-color: #2e7d32;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(46, 125, 50, 0.3);
}

.hero-content button:hover {
  background-color: #1b5e20;
}
</style>
