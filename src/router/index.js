import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Home_KR from '../views/Home_KR.vue'
import Home_VN from '../views/Home_VN.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/home_kr', component: Home_KR },
  { path: '/home_vn', component: Home_VN },
]

const router = createRouter({
  history: createWebHistory(), // Important for clean URLs
  routes
})

// Navigation Guard
router.beforeEach(async (to, from, next) => {
    // Only if user is going to '/'
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
        next('/home') // fallback to English
      }
    } else {
      next() // normal navigation for any other route
    }
  })



export default router

