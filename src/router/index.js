import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SearchResultView from '../views/SearchResultView.vue';
import MovieView from '../views/MovieView.vue';
import TvView from '../views/TvView.vue';
import PersonView from '../views/PersonView.vue';
import ProfileView from '../views/ProfileView.vue';
import AuthView from '../views/AuthView.vue';
import SignUp from '../components/sign-up/SignUp.vue';
import SignIn from '../components/sign-in/SignIn.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/result/:query',
      name: 'result-list',
      component: SearchResultView
    },

    {
      path: '/movie/:id',
      name: 'movie',
      component: MovieView
    },

    {
      path: '/tv/:id',
      name: 'tv',
      component: TvView
    },

    {
      path: '/person/:id',
      name: 'person',
      component: PersonView
    },

    {
      path: '/profile/:id?',
      name: 'profile',
      component: ProfileView
    },

    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      redirect: () => {
        return { name: 'login' }
      },
      children: [
        {
          path: 'register',
          name: 'register',
          component: SignUp
        },

        {
          path: 'login',
          name: 'login',
          component: SignIn
        }
      ]
    },
  ]
})

export default router
