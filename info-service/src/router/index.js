import Vue from 'vue'
import Router from 'vue-router'
import firstMenu from "./../components/pages/firstMenu"
import secondMenu from "./../components/pages/secondMenu"
import thirdMenu from "./../components/pages/thirdMenu"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '资讯服务',
      component: firstMenu
    },
    {
      path: '/firstMenu',
      name: '资讯服务',
      component: firstMenu
    },
    {
      path:'/secondMenu/:id',
      name:"",
      component:secondMenu
    },
    {
      path:'/thirdMenu',
      name:"详情",
      component:thirdMenu
    }
  ]
})
