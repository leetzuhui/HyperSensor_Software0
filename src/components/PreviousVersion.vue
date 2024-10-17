<template>
  <div class="previous-version-wrapper">
    <div class="section-title">Previous Versions</div>
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
      isOpen: {}, // 使用对象来跟踪每个版本的展开状态
      detailsRefs: [], // 存储每个 detail 的引用
    };
  },
  methods: {
    toggle(id, index) {
      // 切换对应版本的展开状态
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
  font-size: 18px;

  .section-title {
    font-size: 28px;
    font-weight: bold;
    margin: 40px 0 20px;
    color: #007aff;
    text-align: center;
  }

  .previous-version-item {
    background-color: #f4f4f4;
    border-radius: 16px;
    padding: 12px;
    margin-bottom: 35px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        margin: 10px 0;
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

  .detail {
    margin-top: 10px;
    overflow: hidden;
    height: 0;
    opacity: 0;

    p {
      margin: 5px 0;
      font-size: 18px;
      color: #333;
    }
  }
}
</style>
