<template>
  <div class="user-manual-page">
    <Header />
    <h1>User Manual</h1>
    <UserManualTable />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import UserManualTable from '../components/UserManualTable.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header,
    UserManualTable,
    Footer,
  },
};
</script>

<style scoped>
.user-manual-page {
  margin-top: 100px;

  h1 {
    margin: 100px 0;
  }
}
</style>
