import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import resizeDiv from '@/components/Resizeable-Div'
import steps from '@/components/steps'
import emits from '@/components/emitdemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: "/resizediv",
      name:"resizediv",
      component: resizeDiv
    },{
      path: "/steps",
      name:"steps",
      component: steps
    },{
      path: "/emits",
      name:"emits",
      component: emits
    }
  ]
})
