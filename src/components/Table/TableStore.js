import Vue from 'vue'

class TableStore {
  constructor (options) {
    this.state = options.state
    this._mutations = Object.create(null)
    this._wrappedGetters = Object.create(null)

    installStore(this, options)

    restoreVM(this)
  }

  commit (type, payload) {
    const entry = this._mutations[type]
    if (entry) {
      entry.forEach(function commitIterator (handler) {
        handler(payload)
      })
    }
  }
}

function installStore (store, options) {
  for (let type in options.mutations) {
    registerMutation(store, type, options.mutations[type])
  }
  for (let prop in options.getters) {
    registerGetter(store, prop, options.getters[prop])
  }
}

function registerMutation (store, type, handler) {
  const entry = store._mutations[type] || (store._mutations[type] = [])
  entry.push(function wrappedMutation (payload) {
    handler.call(store, store.state, payload)
  })
}

function registerGetter (store, prop, getter) {
  const entry = store._wrappedGetters[prop] || (store._wrappedGetters[prop] = [])
  entry.push(function wrappedGetter () {
    return getter.call(store, store.state)
  })
}
// TODO: getter 属性的响应
function restoreVM (store) {
  const state = store.state
  let computed = {}
  Object.entries(store._wrappedGetters).forEach(([key, getter]) => {
    computed[key] = getter[0]
    Object.defineProperty(store, key, {
      get: () => store._vm[key],
      enumerable: true
    })
  })
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed
  })
  console.log(store._vm)
}

export default TableStore
