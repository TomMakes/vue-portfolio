<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from 'vue-router'

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
  <!-- TODO, get the links as separate components. Ask AI to accomplish this task -->
  <header :class="{ minimized: isMinimized }"> 
    <div class="flex-container" id="heading">
      <div class="flex-container navbarLeft">
        <div class="link">
            <a href="media/resume/DayZInternshipWebDevThomasRyszkiewiczResume.pdf" class="navLink"> Resume
            <div class="underline navLinkUnderline"> </div>
          </a> 
        </div>
        <div class="link">
			<a href="https://github.com/TomMakes" class="navLink"> Github
			<div class="underline navLinkUnderline"> </div> </a> </div>
      </div>
      <div class="flex-container navbarRight">
        <div class="link">
			<a href="#contactMeDiv" class="navLink"> Contact
			<div class="underline navLinkUnderline"> </div> </a> </div>
		<div class="link">
			<a href="https://www.linkedin.com/in/thomas-ryszkiewicz-b389343a/" class="navLink"> LinkedIn
			<div class="underline navLinkUnderline"> </div> </a> </div>
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

header.minimized .navLink {
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
	transform: scale(0,0);
}

</style>