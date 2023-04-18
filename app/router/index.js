import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from "../components/WelcomePage";
import ProjectsPage from "../components/project/ProjectsPage";
import NotFoundPage from "../components/NotFoundPage";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomePage,
      meta: {
        title: 'IsoHarmonics - Homepage'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage,
      meta: {
        title: 'IsoHarmonics - Projects'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFoundPage,
      meta: {
        title: 'IsoHarmonics - 404 Page Not Found'
      }
    },
  ]
})
