<script setup>
import { defineProps } from 'vue'
const props = defineProps(['navbarBgColor'])

</script>

<template>
  <nav class="nav" :style="{ backgroundColor: props.navbarBgColor }">
    <i class="uil uil-bars navOpenBtn"></i>
    <a href="#" class="logo">XXXXXX</a>
  </nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: #f0faff;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 200px;
  background: #efb043;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.nav,
.nav .nav-links {
  display: flex;
  align-items: center;
}

.nav {
  justify-content: space-between;
}

a {
  color: #fff;
  text-decoration: none;
}

.nav .logo {
  font-size: 22px;
  font-weight: 500;
}

.nav .nav-links {
  column-gap: 20px;
  list-style: none;
}

.nav .nav-links a {
  transition: all 0.2s linear;
}

.nav.openSearch .nav-links a {
  opacity: 0;
  pointer-events: none;
}

.nav .search-icon {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}

.nav .search-box {
  position: absolute;
  right: 250px;
  height: 45px;
  max-width: 555px;
  width: 100%;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s linear;
}

.nav.openSearch .search-box {
  opacity: 1;
  pointer-events: auto;
}

.search-box .search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  left: 15px;
  color: #4a98f7;
  transform: translateY(-50%);
}

.search-box input {
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 6px;
  background-color: #fff;
  padding: 0 15px 0 45px;
}

.nav .navOpenBtn,
.nav .navCloseBtn {
  display: none;
}


</style>