<script setup lang="ts">
import BackButton from '../../components/BackButton.vue'
</script>
<template>
  <div class="about">
    <div class="tom-img">
      <img src="../../assets/images/aboutMePicCrop1.png" />
    </div>
    <div class="about-me-text">
      <p>
        I'm Thomas Ryszkiewicz, a software developer with a full-stack background and a focus on front-end work, where thoughtful design, system clarity, and user experience intersect. I love working with others to turn ideas into enjoyable and accessible experiences; bringing structure, intention, and creativity to the software people use.
      </p>
      <p>
        I believe the best software is written for the developer who comes next. That belief shapes how I approach my work: I prioritize maintainability, readability, and collaboration so that systems are easy to understand, evolve, and support over time. Whether I’m exploring new tools or working closely with teammates to shape features, I approach development as a form of play. I’m curious, thoughtful, and always learning. That mindset helps me build software that’s not just functional, but resilient within the market.
      </p>
      <p>
        Meditation plays an important role in how I work and grow as a professional. Through a regular practice, I’ve strengthened my ability to focus, self-regulate, and approach problems with empathy and clarity. That awareness carries directly into my development work: staying present with difficult problems, communicating thoughtfully with teammates, and making intentional decisions under uncertainty.
      </p>
      <p>
        Outside of coding, I enjoy creative pursuits like drawing and video creation, which help keep me curious and balanced. I’m naturally introspective and regularly reflect on how I’m directing my life and career, careful not just about what I build, but why I build it and how it affects the people who use it.
      </p>
    </div>
    <BackButton />
  </div>
</template>

<style>
.about {
  display: flex;
  flex-direction: column;
  background: var(--color-background-soft);
  width: min-content;
  height: 100%;
  overflow: auto;
}
.tom-img {
  padding: 20px;
}
.about-me-text {
  flex-grow: 1;
  font-size: 2rem;
  padding: 0px 40px;
  p {
    padding: 1rem 0px;
  }
  p:last-child {
    padding-bottom: 2rem;
  }
}
</style>
