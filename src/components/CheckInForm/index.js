import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { handleCheckin } from '../../functions/checkinForm'
import { requestCheckInStock } from '../../thunks/materials'
import { findMaterial } from '../../selectors'

const CheckInForm = ({
    material,
    checkout
}) => (
    <form 
        className="material__form"
        method="post"
        onSubmit={ev => {
            ev.preventDefault()

            const quantity = Number(ev.target.quantity.value)

            handleCheckin(material, quantity)
                .then(contnue =>
                    contnue === true && checkout(quantity)
                )
            
            ev.target.reset()
        }}>

        <hr />

        <div className="inner">
            <p>
                <label>Check-In Quantity</label>
                <input 
                    required
                    type="number" 
                    name="quantity"
                    defaultValue={0}
                />
            </p>
        </div>

        <button type="submit">Continue</button>
    </form>
)

CheckInForm.propTypes = {
    materialId: PropTypes.number,
    material: PropTypes.object,
    checkout: PropTypes.func
}

export default connect(
    (state, props) => ({
        material: findMaterial(state, props.materialId)
    }),
    (dispatch, props) => ({
        checkout(amount) {
            dispatch(requestCheckInStock(props.materialId, amount))
        }
    })
)(CheckInForm)