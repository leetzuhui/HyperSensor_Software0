<template>
  <Header />
  <div class="contact-page">
    <h1 class="contact-title">Contact Us</h1>
    <div class="contact-info">
      <div class="info-item">
        <div class="info-text">
          <h3>Email</h3>
          <p>For software support and inquiries.</p>
        </div>
        <div class="info-link">
          <a href="mailto:tzuhui.lee@icloud.com">tzuhui.lee@icloud.com</a>
        </div>
      </div>
      <div class="info-item">
        <div class="info-text">
          <h3>User Manual</h3>
          <p>Access our software comprehensive guide.</p>
        </div>
        <div class="info-link">
          <router-link to="/user-manual">User Manual</router-link>
        </div>
      </div>
      <div class="info-item">
        <div class="info-text">
          <h3>Address (Hefei)</h3>
          <p>Visit us for in-person assistance.</p>
        </div>
        <div class="info-link">
          <p>CG PARK, Qingtan Rd, Shushan District, Hefei, Anhui</p>
        </div>
      </div>
      <div class="info-item last">
        <div class="info-text">
          <h3>Address (Tianjin)</h3>
          <p>Visit us for in-person assistance.</p>
        </div>
        <div class="info-link">
          <p>Haitai W Rd, Xiqing District, Tianjin</p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'ContactPage',
  components: {
    Header,
    Footer,
  }
};
</script>

<style scoped>
.contact-page {
  width: 80%;
  margin: 0 auto;
  text-align: left;
  padding-top: 100px;
  font-size: 25px;

  .contact-title {
    font-weight: bold;
    color: #333;
    margin-bottom: 30px;
    text-align: center;
    margin: 100px 0;
  }

  .contact-info {
    display: flex;
    flex-direction: column;

    .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #333;
      padding: 60px;

      .info-text {
        h3 {
          color: #333;
          margin: 20px 0;
        }

        p {
          font-size: 20px;
          color: #666;
        }
      }

      .info-link {

        a,
        p {
          font-size: 16px;
          color: #007aff;
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: #0056b3;
          }
        }
      }
    }

    .last {
      border-bottom: 1px solid #333;
    }
  }
}
</style>
