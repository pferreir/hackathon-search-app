import Vue from 'vue'
import Router from 'vue-router'
import ResultList from '@/components/ResultList';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ResultList,
      children: [
        {
          path: ':keyword',
          component: ResultList,
          children: [
            {
              path: ':page',
              component: ResultList
            }
          ]
        }
      ]
    }
  ]
});
