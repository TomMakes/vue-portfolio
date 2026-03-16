<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div class="back-button-container">
    <div class="back-button" @click="goBack">Back to home</div>
  </div>
</template>

<style scoped>
.back-button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
}

.back-button {
  cursor: pointer;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: opacity 0.2s;
  width: max-content;
}

.back-button:hover {
  opacity: 0.7;
}
</style>
