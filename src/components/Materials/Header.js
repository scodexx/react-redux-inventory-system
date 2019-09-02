import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { toggleCheckMaterials } from '../../actions/materials'

const Header = ({
  toggleCheck
}) => (
    <thead>
      <tr>
        <th>
          <input 
            type="checkbox"
            onChange={ev => 
              toggleCheck(
                ev.target.checked
              )
            }
          />
        </th>
        <th>Product</th>
        <th>Type</th>
        <th>Barcode</th>
        <th>Delivery</th>
        <th>Price</th>
        <th>Unit</th>
        <th>Qty</th>
        <th>Min</th>
        <th>Max</th>
        <th></th>
      </tr>
    </thead>
)

Header.propTypes = {
  checked: PropTypes.bool,
  toggleCheck: PropTypes.func
}

export default connect(
  null,
  dispatch => ({
    toggleCheck(checked) {
      dispatch(toggleCheckMaterials(checked))
    }
  })
)(Header)