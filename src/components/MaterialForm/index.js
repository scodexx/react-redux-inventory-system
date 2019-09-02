import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './materialform.scss'

import { createNewMaterial, updateMaterial } from '../../thunks/materials'
import { processForm } from '../../functions/materialForm'

let MaterialForm = ({
    material,
    handlenewMaterial,
    handleEditMaterials
}) => (
    <form 
        className="material__form"
        method="post"
        onSubmit={ev => {
            ev.preventDefault()

            material.id
                ? handleEditMaterials(material.id, processForm(ev))
                : (handlenewMaterial(processForm(ev)))

            ev.target.reset()
        }}>

        <hr />

        <div className="inner">
            <p>
                <label>Product Name</label>
                <input
                    required
                    name="product"
                    type="text"
                    defaultValue={material.product}
                />
            </p>

            <p>
                <label>Product type</label> 
                <select 
                    required 
                    name="type"
                    defaultValue={material.type}>

                    <option>Select One</option>
                    <option value="Phones">Phones</option>
                </select>
            </p>

            <p>
                <label>Barcode</label>
                <input 
                    required
                    type="text"
                    name="barcode"
                    defaultValue={material.barcode}
                />
            </p>

            <p>
                <label>Delivery date</label>
                <input 
                    required
                    type="text" 
                    name="delivery"
                    defaultValue={material.delivery}
                />
            </p>

            <p>
                <label>Quantity</label>
                <input 
                    required
                    type="number" 
                    name="quantity"
                    defaultValue={material.quantity}
                />
            </p>

            <p>
                <label>Minimum Stock</label>
                <input 
                    required
                    type="number" 
                    name="minimum"
                    defaultValue={material.quantity}
                />
                <small>Minimum allowed stock</small>
            </p>

            <p>
                <label>Maximum Stock</label>
                <input 
                    required
                    type="number" 
                    name="maximum"
                    defaultValue={material.quantity}
                />
                <small>Maximum allowed stock</small>
            </p>

            <p>
                <label>Unit price</label>
                <input 
                    required
                    type="number"
                    name="unit"
                    defaultValue={material.unit}
                />
            </p>

            <p>
                <label>Price</label>
                <input 
                    required
                    type="number"
                    name="price"
                    defaultValue={material.price}
                />
            </p>
        </div>

        <button type="submit">Save</button>
    </form>
)

MaterialForm.propTypes = {
    material: PropTypes.object,
    handlenewMaterial: PropTypes.func,
    handleEditMaterials: PropTypes.func
}

MaterialForm.defaultProps = {
    material: {},
    handlenewMaterial: ev => ev.preventDefault(),
    handleEditMaterials: ev => ev.preventDefault()
}

MaterialForm = connect(
    null,
    dispatch => ({
        handlenewMaterial(material) {
            dispatch(createNewMaterial(material))
        },
        handleEditMaterials(id, material) {
            dispatch(updateMaterial(id, material))
        }
    })
)(MaterialForm)

export default MaterialForm