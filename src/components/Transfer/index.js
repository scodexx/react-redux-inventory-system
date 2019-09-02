import React from 'react'
import PropTypes from 'prop-types'

const Transfer = ({
    handleTransfer
}) => (
    <form
        method="post"
        onSubmit={handleTransfer}>

        <h3>Transfer from material (SomeProduct)</h3>

        <p>
            <label 
                htmlFor="input-from-loc">
                Transfer product from?
            </label>
            <input 
                type="text" 
                id="input-from-loc" 
                placeholder="Location from?"
            />
        </p>

        <p>
            <label 
                htmlFor="input-to-loc">
                Transfer product to?
            </label>
            <input 
                type="text" 
                id="input-to-loc" 
                placeholder="Location to?"
            />
        </p>

        <p>
            <label 
                htmlFor="input-qty">
                Quantity
            </label>
            <input 
                type="number" 
                id="input-qty" 
                placeholder="Quantity"
            />
        </p>

        <button
            type="submit">
            Transfer
        </button>
    </form>
)

Transfer.propTypes = {
    handleTransfer: PropTypes.func
}

Transfer.defaultProps = {
    handleTransfer: ev => ev.preventDefault()
}

export default Transfer