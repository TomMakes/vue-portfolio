<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import MainHeader from './components/MainHeader.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('Unknown')
const router = useRouter()

const getName = async () => {
  const res = await fetch('/api/')
  const data = await res.json()
  name.value = data.name
}

const navigateToFrontend = () => {
  router.push('/frontend')
}

</script>

<template>
  <div class="app-container">
    <div class="main-content">
      <MainHeader />
      <div class="intro">
        <h3> Hi, I'm Tom. </h3>
        <h3> Learn more about me as a... </h3>
        <ul>
          <li> Professional </li>
          <li> Full Stack Engineer </li>
          <li @click="navigateToFrontend" class="clickable"> Front End Engineer </li>
          <li> Back End Engineer </li>
        </ul>
      </div>
    </div>
    <Transition name="slide">
      <div class="route-view" v-if="$route.path !== '/'">
        <RouterView />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.intro {
  font-size: 3rem;
  max-width: fit-content;
  margin: auto;
}
.app-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.main-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.route-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-enter-to {
  transform: translateX(0);
}

.slide-leave-from {
  transform: translateX(0);
}

.slide-leave-to {
  transform: translateX(100%);
}

/* When route is active, push main content to the left */
.app-container:has(.route-view) .main-content {
  transform: translateX(-100%);
}

.clickable {
  cursor: pointer;
  text-decoration: underline;
  color: var(--color-link);
  transition: opacity 0.2s;
}

.clickable:hover {
  opacity: 0.7;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

button {
  background-color: hsla(160, 100%, 37%, 1);
  color: var(--color-background);
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 1rem 0 0.5rem 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
