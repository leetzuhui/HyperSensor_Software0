<template>
  <Header />
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
    <router-link to="/version-history">Go back to Home</router-link>
  </div>
  <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'NotFoundPage',
  components: {
    Header,
    Footer
  },
};
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 100px 20px;
  font-size: 24px;
  color: #333;
}

.not-found h1 {
  font-size: 48px;
  color: #333;
}

.not-found p {
  margin: 20px 0;
}

.not-found a {
  color: #007aff;
  text-decoration: underline;
}
</style>
