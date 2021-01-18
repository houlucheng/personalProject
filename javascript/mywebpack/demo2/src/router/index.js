import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello1 from '@/components/Hello1'
import Hello2 from '@/components/Hello2'
import notFind from '@/components/notFind'
import Hello3 from '@/components/Hello3'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	  path: '/hello1',
    	  name: 'Hello1',
    	  component:Hello1
    },
    {
    	  path: '/hello2',
    	  name: 'Hello2',
    	  component:Hello2
    },
    {
    	  path: '*',
    	  name: 'notFind',
    	  component:notFind
    },
    {
	  path:'/hlc',
	  name:'hello3',
	  component:Hello3
    }
  ]
})
