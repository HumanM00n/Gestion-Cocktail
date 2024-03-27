import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/public/Home.vue'
import Cocktail from '@/views/public/Cocktail.vue'
import Contact from '@/views/public/Contact.vue'
import NotFound from '@/views/public/NotFound.vue'
import PublicLayout from '@/views/public/Layout.vue'


import adminLayout from '@/views/admin/Layout.vue'
import Dashboard from '@/views/admin/Dashboard.vue'

const routes = [

{
  path: '/',
  name: 'public',
  component: PublicLayout,
  children: [ 
    { path: '/', name: 'Home', component: Home },
    { path: '/cocktails',  name: 'cocktails',  component: Cocktail },
    { path: '/contact', name: 'contact', component: Contact },
  ]
},

{
  path: '/admin',
  path: 'admin',
  component: adminLayout
},

{
  path: '/:pathMatch(.*)*', component: NotFound // Affiche un page 404 not Found quand le chemin spécifié dans l'url n'est pas bon
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
