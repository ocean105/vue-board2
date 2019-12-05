import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Board from '@/components/Board.vue'
import ContentDetail from '@/components/ContentDetail.vue'
import Create from '@/components/Create.vue'

import Read from '@/components/Read.vue'
// import Create from '@/components/Create.vue'
import Detail from '@/components/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/board/free',
      name: 'Board',
      component: Board
    },
    {
      path: '/board/free/detail/:contentId',
      name: 'ContentDetail',
      component: ContentDetail
    },
    {
      path: '/board/free/create/:contentId?',
      name: 'Create',
      component: Create
    },
    
    {
      path:'/',
      name: 'Read',
      component: Read
    },
    // {
    //   path: '/create/:contentId?',
    //   name: 'Create',
    //   component: Create
    // },
    {
      path: '/detail/:contentId',
      name: 'Detail',
      component: Detail
    },    
  ]
})