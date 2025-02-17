<template>
  <!-- PreviousVersion -->
  <div class="previous-version-wrapper">
    <div class="section-title">Previous Versions</div>
    <div class="version-box">
      <div class="previous-version-item" v-for="(version, index) in versions" :key="version.id"
        :class="{ open: isOpen[version.id] }" @click="toggle(version.id, index)">
        <div class="header">
          <h3>{{ version.version }}</h3>
          <span class="accordion-icon">
            <svg t="1728872339944" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="4236" width="20px" height="20px">
              <path
                d="M948.82895 361.713158c14.389732 18.446118 15.597233 41.568744 2.694365 51.643194L530.687618 741.618655c-2.910283 2.28095-12.262278 7.896854-13.852496 9.662057-15.679098 17.331737-38.223556 22.534226-50.383504 11.56029L70.112847 405.439032c-12.159948-10.984169-9.351995-33.961486 6.328126-51.333132 15.680121-17.362436 38.223556-22.545482 50.424436-11.571546l360.707248 325.258898 411.822416-321.244468C912.338874 336.474334 934.470941 343.277274 948.82895 361.713158L948.82895 361.713158z"
                p-id="4237" />
            </svg>
          </span>
        </div>
        <div class="detail" :ref="el => detailsRefs[index] = el">
          <p>Release DateTime: {{ version.datetime }}</p>
          <p>Descriptions: {{ version.descriptions }}</p>
          <p>Id: {{ version.id }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  props: {
    versions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: {},
      detailsRefs: [],
    };
  },
  methods: {
    toggle(id, index) {
      this.isOpen[id] ? this.close(id, index) : this.open(id, index);
    },
    open(id, index) {
      this.isOpen[id] = true;
      gsap.to(this.detailsRefs[index], {
        height: 'auto',
        duration: 0.5,
        opacity: 1,
      });
    },
    close(id, index) {
      this.isOpen[id] = false;
      gsap.to(this.detailsRefs[index], {
        height: 0,
        duration: 0.5,
        opacity: 0,
      });
    },
  },
};
</script>

<style scoped>
.previous-version-wrapper {
  margin: 0 auto;

  .section-title {
    font-size: 28px;
    font-weight: bold;
    margin: 40px 0 20px;
    color: #007aff;
    text-align: center;
  }

  .version-box {
    background-color: #f9f9f9;
    border-radius: 16px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin-bottom: 40px;
  }

  .previous-version-item {
    padding: 12px;
    border-bottom: 1px solid #e0e0e0;
    cursor: pointer;
    transition: background 0.3s ease;

    &:last-child {
      border-bottom: none;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        margin: 0;
        font-size: 20px;
        color: #333;
      }

      .accordion-icon {
        font-size: 16px;
        transition: transform 0.3s ease;
      }
    }
  }

  .previous-version-item.open .accordion-icon {
    transform: rotate(180deg);
  }

  .previous-version-item:hover {
    background-color: rgba(0, 122, 255, 0.1);
  }

  .detail {
    text-align: left;
    margin-top: 10px;
    overflow: hidden;
    height: 0;
    opacity: 0;
    transition: opacity 0.3s ease;

    p {
      margin: 5px 0;
      font-size: 16px;
      color: #666;
    }
  }
}
</style>
