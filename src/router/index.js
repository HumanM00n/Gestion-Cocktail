import { createRouter, createWebHistory } from 'vue-router'

// Ramène tous les composants que l'on met à disposition dans le fichier 'view/public/index.js'
import * as Public from '@/views/public'
import * as Admin from '@/views/admin'

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
      { path: 'users/edit/:id', component: Admin.UserEdit },
      { path: 'users/add', component: Admin.UserAdd },
  
      { path: 'cocktails/index', component: Admin.CocktailIndex },
      { path: 'cocktails/edit',  component: Admin.CocktailEdit }
    ]
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
