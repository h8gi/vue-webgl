import { createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home.vue'
import Chap0201 from './pages/Chap0201.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/chap02-01', component: Chap0201, name: 'Chap02-01'}
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
