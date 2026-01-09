<script setup lang="ts">
import { ref } from "vue";
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import type { MenuMethods } from 'primevue/menu';

const menu = ref<MenuMethods>();
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

const toggle = (event: Event) => {
    if(!menu.value) return;
    menu.value.toggle(event);
};
</script>

<template>
  <div class="header-bar">
    <div class="card flex justify-center">
        <Button type="button" icon="pi pi-align-justify" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div>
  </div>
</template>

<style scoped>
.header-bar {
  line-height: 1.5;
  max-height: 100vh;
}

</style>