<script setup lang="ts">
interface Props {
  href: string;
  label: string;
  minimized?: boolean;
}

withDefaults(defineProps<Props>(), {
  minimized: false,
});
</script>

<template>
  <div class="link">
    <a :href="href" class="navLink" :class="{ minimized }">
      {{ label }}
      <div class="underline navLinkUnderline"></div>
    </a>
  </div>
</template>

<style scoped>
.link {
  font-size: 1.7rem;
}

.navLink {
  text-decoration: none;
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-link);
  transition: font-size 1s ease;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
}

.navLink.minimized {
  font-size: 1.5rem;
}

.underline {
  width: 100%;
  background: dimgrey;
  height: 5px;
  transition: all 1s ease;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -webkit-transition: -webkit-transform 1s ease;
  transform: scale(0, 0);
}
</style>
