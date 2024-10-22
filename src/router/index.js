import { createRouter, createWebHistory } from 'vue-router';
import SoftwareVersionPage from '../views/SoftwareVersionPage.vue';
import UserManualPage from '../views/UserManualPage.vue';
import ContactUsPage from '../views/ContactUsPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

const routes = [
  {
    path: '/HyperSensor_Software',
    name: 'Home',
    component: SoftwareVersionPage, // 默认首页
  },
  {
    path: '/User_Manual',
    name: 'UserManual',
    component: UserManualPage,
  }, {
    path: '/Contact_Us',
    name: 'ContactUs',
    component: ContactUsPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404NotFound',
    component: NotFoundPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
