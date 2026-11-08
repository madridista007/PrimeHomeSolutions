<template>
  <nav class="sidebar">
    <ul>
      <li>
        <router-link to="/" exact-active-class="active">Home</router-link>
      </li>
      <li class="has-submenu">
        <span>Shop</span>
        <ul class="submenu">
          <li>
            <router-link to="/shop/chairs" active-class="active"
              >Chairs</router-link
            >
          </li>
          <li>
            <router-link to="/shop/desks" active-class="active"
              >Desks</router-link
            >
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/about" active-class="active">About Us</router-link>
      </li>
      <li>
        <router-link to="/contact" active-class="active">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 220px;
  height: 100vh;
  background-color: #2c3e50;
  color: white;
  padding: 2rem 1rem;
  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.1);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 1.5rem;
}

.sidebar li.has-submenu > span {
  cursor: pointer;
  font-weight: 600;
  display: block;
  position: relative;
}

.submenu {
  list-style: none;
  margin-top: 0.5rem;
  margin-left: 1rem;
  padding-left: 0;
  display: none;
}

.has-submenu:hover .submenu {
  display: block;
}

.router-link-active,
.active {
  color: #1abc9c;
  font-weight: bold;
}

.router-link-active:hover,
.active:hover {
  color: #16a085;
}

.sidebar a {
  color: white;
  text-decoration: none;
  display: block;
  transition: color 0.3s ease;
}

.sidebar a:hover {
  color: #1abc9c;
}
</style>
