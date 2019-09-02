import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './app.scss'

import { removeMaterials } from '../../thunks/materials'

import Materials from '../Materials'
import MaterialForm from '../MaterialForm'

const App = ({
  handleDeleteMaterial
}) => {
  const [toggleMaterialForm, setToggleMaterialForm] = useState(false)

  return <>
    <div className="buttons-set">
      <button
        onClick={() => 
          setToggleMaterialForm(!toggleMaterialForm)
        }>
        + Add Material
      </button>

      <button
        onClick={() => {
          setToggleMaterialForm(false)
          const c = window.confirm('Are you sure you want to remove selected material(s)?')
          c === true && handleDeleteMaterial()
        }}>
        Delete Material(s)
      </button>
    </div>

    {toggleMaterialForm && <MaterialForm />}

    <Materials />
  </>
}

App.propTypes = {
  handlenewMaterial: PropTypes.func,
  handleDeleteMaterial: PropTypes.func
}

export default connect(
  null,
  dispatch => ({
    handleDeleteMaterial() {
      dispatch(removeMaterials())
    }
  })  
)(App)