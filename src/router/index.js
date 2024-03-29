import { createRouter, createWebHistory } from 'vue-router'

// Ramène tous les composants que l'on met à disposition dans le fichier 'view/public/index.js'
import * as Public from '@/views/public'

// Ramène tous les composants que l'on met à disposition dans le fichier 'view/admin/index.js'
import * as Admin from '@/views/admin'

import Login from '@/views/auth/Login.vue'

import { AuthGuard } from '@/_helpers/auth-guard'

const routes = [
  {
    path: '/',
    name: 'public',
    component: Public.PublicLayout,
    // Déclaration des routes enfants 
    children: [
      { path: '/', name: 'Home', component: Public.Home },
      { path: '/cocktails', name: 'cocktails', component: Public.Cocktail },
      { path: '/contact', name: 'contact', component: Public.Contact },
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin.adminLayout,
    // Déclaration des routes enfants 
    children: [
      { path: 'dashboard', name: 'dashboard', component: Admin.Dashboard },
      { path: 'users/index', component: Admin.UserIndex },
      // Active sur le Path (URL), qu'on va transmettre directement des propriétés
      // (\\d+) veut dire ne doit comporter que des chiffres
      { path: 'users/edit/:id(\\d+)', component: Admin.UserEdit, props: true },
      { path: 'users/add', component: Admin.UserAdd },

      { path: 'cocktails/index', component: Admin.CocktailIndex },
      { path: 'cocktails/edit', component: Admin.CocktailEdit }
    ]
  },

  {
    path: '/login', name: 'Login', component: Login, beforeEnter: AuthGuard
  },

  {
    path: '/:pathMatch(.*)*', component: Public.NotFound // Affiche une page 404 Not Found quand le chemin spécifié dans l'URL n'est pas correct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
