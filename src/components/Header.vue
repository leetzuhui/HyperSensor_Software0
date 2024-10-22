<template>
  <!-- Header -->
  <header ref="header">
    <router-link to="/HyperSensor_Software" class="logo">
      <img src="../assets/logo.png" />
    </router-link>
    <nav class="nav-links">
      <router-link to="/HyperSensor_Software">Software Version History</router-link>
      <router-link to="/User_Manual">User Manual</router-link>
      <router-link to="/Contact_Us">Contact Us</router-link>
    </nav>
  </header>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'PageWithHeader',
  data() {
    return {
      lastScrollTop: 0,
    };
  },
  methods: {
    handleScroll() {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const header = this.$refs.header;

      if (currentScrollTop > this.lastScrollTop && currentScrollTop > 10) {
        // Scroll down
        gsap.to(header, {
          height: 60,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          duration: 0.3,
          ease: 'power3.out',
        });
      } else if (currentScrollTop < this.lastScrollTop) {
        // Scroll up
        gsap.to(header, {
          height: 100,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
          duration: 0.3,
          ease: 'power3.out',
        });

        // Scroll to top
        if (currentScrollTop == 0) {
          gsap.to(header, {
            height: 100,
            backgroundColor: 'rgba(255, 255, 255, 0)',
            boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
            duration: 0.3,
            ease: 'power3.out',
          });
        }
      }

      this.lastScrollTop = currentScrollTop;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: rgba(255, 255, 255, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: all 0.3s ease-in-out;
  z-index: 1000;

  .logo {
    cursor: pointer;

    img {
      height: 46px;
      width: auto;
    }
  }

  .nav-links {
    display: flex;
    gap: 50px;

    a {
      color: #007aff;
      text-decoration: none;
      font-size: 18px;
      transition: color 0.3s;
    }

    a:hover {
      color: #0056b3;
    }
  }

}
</style>
