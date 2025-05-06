import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Home_KR from '../views/Home_KR.vue'
import Home_VN from '../views/Home_VN.vue'
import Mitochondria from '../views/Mitochondria.vue'
import NuriCell from '../views/NuriCell.vue' // 👈 Import your component

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/home_kr', component: Home_KR },
  { path: '/home_vn', component: Home_VN },
  { path: '/mitochondria', component: Mitochondria },
  { path: '/nuricell', component: NuriCell }, // 👈 Add your route
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.path === '/home') {
    try {
      const res = await fetch('https://ipapi.co/json/')
      const data = await res.json()
      const countryCode = data.country_code
      if (countryCode === 'KR') {
        next('/home_kr')
      } else if (countryCode === 'VN') {
        next('/home_vn')
      } else {
        next('/home')
      }
    } catch (error) {
      console.error('Failed to fetch IP data:', error)
      next('/home')
    }
  } else {
    next()
  }
})

export default router


