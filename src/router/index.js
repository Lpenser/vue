import Vue from 'vue'
import Router from 'vue-router';
import tab from '@/components/tab';
import home from '@/components/home';
import set from '@/components/set';
import list from '@/components/list';
import chats from '@/components/chats'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/',
      name: 'tab',
      component: tab,
      children:[
        {
          path:'/home',
          component: home
        },
        {
          path:'/list',
          component: list
        },
        {
          path:'/set',
          component: set
        },
        {
          path:'/chats',
          component: chats
        }
      ]
    }
  ]
})
