import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { handleCheckout } from '../../functions/checkoutForm'
import { findMaterial } from '../../selectors'
import { requestCheckOutStock } from '../../thunks/materials'

const CheckOutForm = ({
    material,
    checkout
}) => (
    <form 
        className="material__form"
        method="post"
        onSubmit={ev => {
            ev.preventDefault()

            const quantity = Number(ev.target.quantity.value)

            handleCheckout(material, quantity)
                .then(contnue =>
                    contnue === true && checkout(quantity)
                )
            
            ev.target.reset()
        }}>

        <hr />

        <div className="inner">
            <p>
                <label>Check-Out Quantity</label>

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

CheckOutForm.propTypes = {
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
            dispatch(requestCheckOutStock(props.materialId, amount))
        }
    })
)(CheckOutForm)