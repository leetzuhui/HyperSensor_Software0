<template>
  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <div class="author-info">
        <p>Author: Lee Tzu-Hui</p>
        <p>All rights reserved.</p>
      </div>
      <div class="legal-links">
        <a href="#/privacy-policy">Privacy Policy</a>
        <a href="#/terms-of-service">Terms of Service</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageWithFooter',
};
</script>

<style scoped>
.footer {
  padding: 40px 0;
  text-align: center;
  margin-top: 60px;

  .footer-content {
    max-width: 80%;
    margin: 0 auto;

    .author-info {
      font-size: 16px;
      color: #333;
      line-height: 1.4;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .legal-links {
      margin-top: 15px;

      a {
        font-size: 16px;
        color: #007aff;
        margin: 0 10px;
        text-decoration: none;
        transition: color 0.3s;
      }

      a:hover {
        color: #0056b3;
      }
    }
  }
}
</style>
