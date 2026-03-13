<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from 'vue-router'
import NavLink from './NavLink.vue';

// We're saving this just for the icon choices that we may use later
const items = ref([
    { 
        label: "About Me",
        icon:  'pi pi-info-circle'
    },
    { 
        label: "GitHub",
        icon:  'pi pi-github'
    },
    { 
        label: "LinkedIn",
        icon:  'pi pi-linkedin'
    },
    { 
        label: "Contact Me",
        icon:  'pi pi-envelope'
    },
    {
        label: 'Projects',
        items: [
            {
                label: 'Workflow Builder',
                icon: 'pi pi-cog'
            },
            {
                label: 'Day Zero',
                icon: 'pi pi-wave-pulse'
            },
            {
                label: 'Dangers of the Road',
                icon: 'pi pi-car'
            },
            {
                label: 'WoW Character Search',
                icon: 'pi pi-search'
            },
        ]
    }
]);

const isMinimized = ref(false);
const route = useRoute();

watch(() => route.path, (newPath) => {
  if (newPath !== '/') {
    isMinimized.value = true;
  } else {
    isMinimized.value = false;
  }
})
</script>

<template>
  <header> 
    <div class="flex-container" id="heading">
      <div class="flex-container navbarLeft">
        <NavLink
          href="media/resume/DayZInternshipWebDevThomasRyszkiewiczResume.pdf"
          label="Resume"
          :minimized="isMinimized"
        />
        <NavLink href="https://github.com/TomMakes" label="Github" :minimized="isMinimized" />
      </div>
      <div class="flex-container navbarRight">
        <NavLink href="#contactMeDiv" label="Contact" :minimized="isMinimized" />
        <NavLink
          href="https://www.linkedin.com/in/thomas-ryszkiewicz-b389343a/"
          label="LinkedIn"
          :minimized="isMinimized"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
.flex-container {
  display: flex;
}
#heading {
  position: fixed;
  margin: 0 auto;
  width: 100%;
  height: 4rem;
  justify-content: space-between;
  line-height: 1.5;
}

.navbarLeft {
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom-right-radius: 1rem;
}

.navbarLeft > div {
	padding: 0 1.5rem;
}
.navbarRight {
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom-left-radius: 1rem;
}

.navbarRight > div {
	padding: 0 1.5rem;
}

</style>