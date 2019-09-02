import React from 'react'
import ReactDOM from 'react-dom'

import Root from './containers/Root'
import * as serviceWorker from './serviceWorker'

import configureStore from './store/configureStore'

import { fetchMaterials } from './thunks/materials'

const store = configureStore()

store.dispatch(fetchMaterials())

ReactDOM.render(
    <Root 
        store={store}
    />,
    document.getElementById('root')
)

serviceWorker.register()
