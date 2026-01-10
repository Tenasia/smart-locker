import { createRouter, createWebHistory } from 'vue-router'
import EnterUnit from '../views/EnterUnit.vue'
import SelectLocker from '../views/SelectLocker.vue'
import OpenLocker from '../views/OpenLocker.vue'
import QRPage from '../views/QRPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: EnterUnit },
    { path: '/lockers', component: SelectLocker },
    { path: '/open', component: OpenLocker },
    { path: '/qr', component: QRPage }
  ]
})

export default router
