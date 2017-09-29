class TableStore {
  constructor (options) {
    this.state = options.state
    this._mutations = Object.create(null)

    installStore(this, options)
  }

  commit (type, payload) {
    const entry = this._mutations[type]
    console.log(payload)
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
}

function registerMutation (store, type, handler) {
  const entry = store._mutations[type] || (store._mutations[type] = [])
  entry.push(function wrappedMutation (payload) {
    handler.call(store, store.state, payload)
  })
}

export default TableStore
