<template>
  <nav class="navbar">
    <div class="logo">Prime<span>Home</span><span>Solutions</span></div>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li class="dropdown">
        <span class="dropdown-title">Shop</span>
        <ul class="dropdown-content">
          <li><router-link to="/shop/chairs">Chairs</router-link></li>
          <li><router-link to="/shop/desks">Desks</router-link></li>
        </ul>
      </li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  position: fixed; /* stays at the top */
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 0 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.logo {
  font-size: 1.8rem;
  font-weight: 800;
  color: #1a1a1a; /* Dark gray or navy */
}

.logo span {
  color: #000000; /* Light blue accent */
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
  margin: 0;
}

.nav-links li {
  position: relative;
}

.nav-links a,
.dropdown-title {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  transition: color 0.3s ease;
  cursor: pointer;
}

.nav-links a:hover,
.dropdown-title:hover {
  color: #007bff; /* Hover to match accent color */
}

/* Dropdown Styles */
.dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border-radius: 6px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 999;
  min-width: 150px;
  padding: 0.5rem 0;
}

.dropdown:hover .dropdown-content {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-content li {
  padding: 0.5rem 1rem;
}

.dropdown-content li a {
  color: #333;
  display: block;
  width: 100%;
}

.dropdown-content li a:hover {
  background: #f2f2f2;
  border-radius: 4px;
}
</style>
