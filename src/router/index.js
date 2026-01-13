import { createRouter, createWebHistory } from 'vue-router'
import EnterUnit from '../views/EnterUnit.vue'
import SelectLocker from '../views/SelectLocker.vue'
import OpenLocker from '../views/OpenLocker.vue'
import QRPage from '../views/QRPage.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Map from '../views/Map.vue'
import Contact from '../views/Contact.vue'
import FAQ from '../views/FAQ.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: EnterUnit },
    { path: '/lockers', component: SelectLocker },
    { path: '/open', component: OpenLocker },
    { path: '/qr', component: QRPage },
    { path: '/', component: Login },
    { path: '/dashboard', component: Dashboard },
    { path: '/map', component: Map },
    { path: '/contact', component: Contact },
    { path: '/faq', component: FAQ },
  ]
})

export default router
