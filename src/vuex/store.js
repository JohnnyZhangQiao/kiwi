import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  //state为vuex的全局变量，用于组件间通信
  state : {

  },

  //在vue中，The only way to actually change state in a Vuex store is by committing a mutation
  //应将所有的逻辑处理包含在mutations方法里面
  mutations : {

  },

  //action负责接收从各组件dispatch过来的动作，识别后提交到相应的mutation改变state
  actions : {

  }
})
