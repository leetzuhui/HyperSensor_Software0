<template>
  <!-- LatestVersion -->
  <div class="latest-version-wrapper">
    <div class="section-title">Latest Version</div>
    <div class="latest-version-item" @mouseenter="hoverIn($event)" @mouseleave="hoverOut($event)">
      <h2>{{ latestVersion.version }}</h2>
      <p>Release DateTime: {{ latestVersion.datetime }}</p>
      <p>Descriptions: {{ latestVersion.descriptions }}</p>
      <p>Id: {{ latestVersion.id }}</p>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'LatestVersion',
  props: {
    latestVersion: {
      type: Object,
      required: true
    }
  },
  methods: {
    hoverIn(event) {
      const target = event.currentTarget;
      gsap.to(target, {
        scale: 1.02,
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.45)',
        background: 'linear-gradient(135deg, rgba(0, 140, 255, 1) 0%, rgba(0, 160, 255, 1) 25%, rgba(0, 180, 255, 1) 50%, rgba(0, 200, 255, 1) 75%, rgba(0, 122, 255, 1) 100%)',
        duration: 1.0,
        ease: 'power3.out',
      });
    },
    hoverOut(event) {
      const target = event.currentTarget;
      gsap.to(target, {
        scale: 1,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        background: 'linear-gradient(135deg, rgba(0, 122, 255, 1) 0%, rgba(0, 140, 255, 1) 25%, rgba(0, 160, 255, 1) 50%, rgba(0, 180, 255, 1) 75%, rgba(0, 200, 255, 1) 100%)',
        duration: 1.0,
        ease: 'power3.out',
      });
    }
  }
};
</script>

<style scoped>
.latest-version-wrapper {
  font-size: 22px;

  .section-title {
    font-size: 28px;
    font-weight: bold;
    margin: 40px 0 20px;
    color: #007aff;
    text-align: center;
  }

  .latest-version-item {
    background: linear-gradient(135deg,
        rgba(0, 122, 255, 1) 0%,
        rgba(0, 140, 255, 1) 25%,
        rgba(0, 160, 255, 1) 50%,
        rgba(0, 180, 255, 1) 75%,
        rgba(0, 200, 255, 1) 100%);
    color: #fff;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 35px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    text-align: left;
    cursor: pointer;
    overflow: hidden;
  }
}
</style>
