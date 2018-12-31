import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import goods from '../components/goods/goods.vue'
import rating from '../components/rating/rating.vue'
import seller from '../components/seller/seller.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { path: '/goods',
      name: 'goods',
      component: goods
    },
    { path: '/rating',
      name: 'rating',
      component: rating
    },
    { path: '/seller',
      name: 'seller',
      component: seller
    }
  ]
})
