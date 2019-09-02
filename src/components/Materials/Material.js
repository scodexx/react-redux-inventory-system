import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import MaterialForm from '../MaterialForm'

import { toggleCheckMaterial } from '../../actions/materials'
import CheckOutForm from '../CheckOutForm';
import CheckInForm from '../CheckInForm';

const Material = ({
    material,
    toggleCheck
}) => {
    const [editMaterials, setEditMaterials] = useState(false)
    const [checkoutMaterial, setCheckoutMaterial] = useState(false)
    const [checkinMaterial, setCheckinMaterial] = useState(false)

    const showForm = (fn) => {
        setEditMaterials(false)
        setCheckoutMaterial(false)
        setCheckinMaterial(false)

        fn()
    }

    return <>
        <tr>
            <td>
                <input 
                    type="checkbox"
                    checked={material.checked}
                    onChange={() => 
                        toggleCheck(material.id)
                    }
                />
            </td>
            <td>
                {material.product}
            </td>
            <td>
                {material.type}
            </td>
            <td>
                {material.barcode}
            </td>
            <td>
                {material.delivery}
            </td>
            <td>
                {material.price}
            </td>
            <td>
                {material.unit}
            </td>
            <td>
                {material.quantity}
            </td>
            <td>
                {material.minimum}
            </td>
            <td>
                {material.maximum}
            </td>
            <td>
                <div className="buttons-set">
                    <button
                        onClick={() => 
                            showForm(() =>
                                setEditMaterials(!editMaterials)
                            )
                        }>
                        Edit
                    </button>

                    <button
                        onClick={() => 
                            showForm(() => 
                                setCheckoutMaterial(!checkoutMaterial)
                            )
                        }>
                        Check-Out
                    </button>

                    <button
                        onClick={() => 
                            showForm(() => 
                                setCheckinMaterial(!checkinMaterial)
                            )
                        }>
                        Check-In
                    </button>

                    <button>
                        Transfer
                    </button>
                </div>
            </td>
        </tr>
        
        {editMaterials && (
            <tr>
                <td></td>
                <td colSpan={10}>
                    <MaterialForm 
                        material={material}
                    />
                </td>
            </tr>
        )}

        {checkoutMaterial && (
            <tr>
                <td></td>
                <td colSpan={10}>
                    <CheckOutForm
                        materialId={material.id}
                    />
                </td>
            </tr>
        )}

        {checkinMaterial && (
            <tr>
                <td></td>
                <td colSpan={10}>
                    <CheckInForm
                        materialId={material.id}
                    />
                </td>
            </tr>
        )}
    </>
}

Material.propTypes = {
    material: PropTypes.object,
    toggleCheck: PropTypes.func
}

export default connect(
    null,
    dispatch => ({
        toggleCheck(id) {
            dispatch(toggleCheckMaterial(id))
        }
    })
)(Material)