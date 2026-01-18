<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import MainHeader from './components/MainHeader.vue'
import { reactive, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const name = ref('Unknown')
const router = useRouter()
const route = useRoute()

const getName = async () => {
  const res = await fetch('/api/')
  const data = await res.json()
  name.value = data.name
}

const navigateToAbout = () => {
  transitionObject['state-center'] = false;
  transitionObject['state-down'] = true;
  router.push('/about')
}
const navigateToFrontend = () => {
  transitionObject['state-center'] = false;
  transitionObject['state-left'] = true;
  router.push('/frontend')
}
const transitionObject = reactive({
  'state-left': false,
  'state-up': false,
  'state-right': false,
  'state-down': false,
  'state-center': true,
});

watch(() => route.path, (newPath) => {
  if (newPath === '/') {
    transitionObject['state-center'] = true;
    transitionObject['state-left'] = false;
    transitionObject['state-up'] = false;
    transitionObject['state-right'] = false;
    transitionObject['state-down'] = false;
  }
})

</script>

<template>
  <div class="app-container">
    <div class="intro-content" :class="transitionObject">
      <MainHeader />
      <div class="intro">
        <h3> Hi, I'm Tom. </h3>
        <h3> Learn more about me as a... </h3>
        <ul>
          <li @click="navigateToAbout" class="clickable"> Professional </li>
          <li> Full Stack Engineer </li>
          <li @click="navigateToFrontend" class="clickable"> Front End Engineer </li>
          <li> Back End Engineer </li>
        </ul>
      </div>
    </div>
    <!-- documentation https://vuejs.org/guide/built-ins/transition -->
    <Transition name="slide-left">
      <div class="route-view" v-if="$route.path === '/frontend'">
        <RouterView />
      </div>
    </Transition>
    <Transition name="slide-down">
      <div class="route-view" v-if="$route.path === '/about'">
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

.intro-content {
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

/* Slide-down transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-down-enter-from {
  transform: translateY(-100%);
}

.slide-down-enter-to {
  transform: translateY(0);
}

.slide-down-leave-from {
  transform: translateY(0);
}

.slide-down-leave-to {
  transform: translateY(-100%);
}

/* Slide-left transition */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-left-enter-from {
  transform: translateX(100%);
}

.slide-left-enter-to {
  transform: translateX(0);
}

.slide-left-leave-from {
  transform: translateX(0);
}

.slide-left-leave-to {
  transform: translateX(100%);
}

.state-center {
  transform: translate(0%, 0%);
}
.state-left {
  transform: translate(-100%, 0%);
}
.state-up {
  transform: translate(0%, -100%);
}
.state-right {
  transform: translate(100%, 0%);
}
.state-down {
  transform: translate(0%, 100%);
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
