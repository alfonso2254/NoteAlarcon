import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

/*
* Si no está construyendo con modo SSR, puede
* exportar directamente la instanciación de la tienda;
* *
* La función a continuación también puede ser asíncrona; ya sea uso
* async / aguarda o devuelve una Promesa que resuelve
* con la instancia de la tienda.
*/

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
