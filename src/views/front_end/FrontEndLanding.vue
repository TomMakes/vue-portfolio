<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/')
}
</script>

<template>
    <div class="landing-container">
        <h1>Front End</h1>
        <ul>
            <li> Insert </li>
            <li> Projects </li>
            <li> Here </li>
        </ul>
        <div class="sticky-back" @click="goBack">Go Back</div>
    </div>
</template>

<style scoped>
.landing-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sticky-back {
  cursor: pointer;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin-top: 2rem;
  transition: opacity 0.2s;
}

.sticky-back:hover {
  opacity: 0.7;
}
</style>
