import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  //只有mutation中定义的函数，才有权利修改state中的数据
  mutations: {
    add(state){
      state.count++
    },
      addN(state,step){
          state.count += step;
      },
      sub(state){
          state.count --;
      },
      subN(state,step){
          state.count -= step;
      },
  },
  actions: {
    addAsync(context){
      setTimeout(() => {
        //在actions中不能直接修改state中的数据
        //必须通过context.commit()触发某个 mutation才行
        context.commit("add")
      },1000)
    },
      addAsyncN(context,step){
          setTimeout(() => {
              context.commit("addN",step)
          },1000)
      },
      subAsync(context){
          setTimeout(() => {
              context.commit("sub")
          },1000)
      },
      subAsyncN(context,step){
          setTimeout(() => {
              context.commit("subN",step)
          },1000)
      }
  },
  getters:{
    showNum(state){
      return '当前最新的数量是【' + state.count + '】'
    }
  },
  modules: {
  }
})
