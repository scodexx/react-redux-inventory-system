import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './materials.scss'

import Header from './Header'
import Material from './Material'

import { getMaterials } from '../../selectors'

const Materials = ({
  materials
}) => (
  <table 
    className="materials__table" 
    cellSpacing={0} 
    cellPadding={0}>
    
    <Header />

    <tbody>
      {materials.map(material => 
        <Material 
          key={material.id}
          material={material}
        />
      )}
    </tbody>
  </table>
)

Materials.propTypes = {
  materials: PropTypes.array
}

export default connect(
  state => ({
    materials: getMaterials(state)
  })
)(Materials)