import { createRouter, createWebHistory } from 'vue-router';
import SoftwareVersionPage from '../views/SoftwareVersionPage.vue';
import UserManualPage from '../views/UserManualPage.vue';
import ContactUsPage from '../views/ContactUsPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

const routes = [
  {
    path: '/HyperSensor_Software',
    redirect: 'version-history'
  },
  {
    path: '/version-history',
    name: 'SoftwareVersion',
    component: SoftwareVersionPage, // 默认首页
  },
  {
    path: '/version-history/user-manual',
    name: 'UserManual',
    component: UserManualPage,
  }, {
    path: '/version-history/contact-us',
    name: 'ContactUs',
    component: ContactUsPage,
  },
  {
    path: '/version-history/:pathMatch(.*)*',
    name: '404NotFound',
    component: NotFoundPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
