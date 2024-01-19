<!-- App.vue -->

<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/">Journal</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/clavier">Clavier</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
body {
  background-color: lightblue; 
  margin: 0; 
}

#app {
  height: 100vh; 
  display: flex;
  flex-direction: column;
}

header {
  background-color: lightblue;
  padding: 10px;
}

nav {
  height: 50%;
  width: 50%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  border-radius: 10px;
  margin: auto;
}


nav a.router-link-exact-active {
  font-weight: bold;
}

nav a:hover {
  background-color: #3498db; /* Changer la couleur de fond au survol */
}

nav a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  
  font-size: 50px;
  text-decoration: none;
  color: black; 
}
</style>
