import Vuex from "vuex"
import Vue from "vue"
import indexMutations from "./index/mutations.js"
import indexAction from "./index/actions"
import commonMutations from "./common/mutations.js"
import commonAction from "./common/actions"
import getters from "./getters"

Vue.use(Vuex);

const moduleConmmom={
  namespaced: true,
  state:{
    count:1
  },
  mutations:commonMutations,
  getters:getters
}


const moduleIndex={
   namespaced: true,
   state:{
    count:2
  },
  mutations:indexMutations,
  getters:getters
}

export default new Vuex.Store({

   state:{
    count:5
  },
   modules:{
     common:moduleConmmom,
     index:moduleIndex
   }

})