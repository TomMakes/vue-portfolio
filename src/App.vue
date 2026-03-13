<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
import { reactive, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const portfolioState = {
  home: {
    'state-center': true,
    'state-left': false,
    'state-up': false,
    'state-right': false,
    'state-down': false,
  },
  about: {
    'state-center': false,
    'state-left': false,
    'state-up': false,
    'state-right': false,
    'state-down': true,
  },
  frontend: {
    'state-center': false,
    'state-left': true,
    'state-up': false,
    'state-right': false,
    'state-down': false,
  },
  fullstack: {
    'state-center': false,
    'state-left': false,
    'state-up': true,
    'state-right': false,
    'state-down': false,
  },
  backend: {
    'state-center': false,
    'state-left': false,
    'state-up': false,
    'state-right': true,
    'state-down': false,
  }
};

const navigateToAbout = () => {
  transitionObject['states'] = portfolioState.about;
  router.push('/about')
}
const navigateToFrontend = () => {
  transitionObject['states'] = portfolioState.frontend;
  router.push('/frontend')
}
const navigateToFullStack = () => {
  transitionObject['states'] = portfolioState.fullstack;
  router.push('/fullstack')
}
const navigateToBackend = () => {
  transitionObject['states'] = portfolioState.backend;
  router.push('/backend')
}
const transitionObject = reactive({ states: portfolioState.home });

watch(() => route.path, (newPath) => {
  if (newPath === '/') {
    transitionObject['states'] = portfolioState.home;
  }
})

</script>

<template>
  <div class="app-container">
    <MainHeader />
    <div class="intro-content" :class="transitionObject.states">
      <div class="intro-container">
        <div class="intro">
          <div id="greeting">
            <h3>Hi,</h3>
            <h3>I'm Tom.</h3>
          </div>
          <h3> Learn more about me as a... </h3>
          <ul>
            <li @click="navigateToAbout" class="clickable"> Professional </li>
            <li @click="navigateToFullStack" class="clickable"> Full Stack Engineer </li>
            <li @click="navigateToFrontend" class="clickable"> Front End Engineer </li>
            <li @click="navigateToBackend" class="clickable"> Back End Engineer </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- documentation https://vuejs.org/guide/built-ins/transition -->
    <Transition name="slide-left">
      <div class="route-view" v-if="$route.path === '/frontend'">
        <RouterView />
      </div>
    </Transition>
    <Transition name="slide-up">
      <div class="route-view" v-if="$route.path === '/fullstack'">
        <RouterView />
      </div>
    </Transition>
    <Transition name="slide-right">
      <div class="route-view" v-if="$route.path === '/backend'">
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
.intro-container {
  height: 100%;
  display: flex;
  align-items: center;
  .intro {
    font-size: 3rem;
    max-width: fit-content;
    margin: auto;
    #greeting {
      padding-bottom: 1.3rem;
      line-height: 4rem;
    }
  }
}
.app-container {
  position: relative;
  border: 5px solid aliceblue;
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

/* Slide-up transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-up-enter-from {
  transform: translateY(100%);
}

.slide-up-enter-to {
  transform: translateY(0);
}

.slide-up-leave-from {
  transform: translateY(0);
}

.slide-up-leave-to {
  transform: translateY(100%);
}

/* Slide-right transition */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-right-enter-from {
  transform: translateX(-100%);
}

.slide-right-enter-to {
  transform: translateX(0);
}

.slide-right-leave-from {
  transform: translateX(0);
}

.slide-right-leave-to {
  transform: translateX(-100%);
}

/** Transition state class styles */
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
  max-height: 100vh;
}
</style>
