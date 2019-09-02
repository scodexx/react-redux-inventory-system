import * as types from '../constants/ActionTypes'

export const addMaterials = materials => ({
    type: types.ADD_MATERIALS,
    materials
})

export const newMaterial = material => ({
    type: types.NEW_MATERIAL,
    material
})

export const editMaterials = (id, material) => ({
    type: types.EDIT_MATERIAL,
    id,
    material
})

export const getCheckedMaterialsId = () => ({
    type: types.GET_CHECKED_MATERIALS
})

export const deleteCheckedMaterials = () => ({
    type: types.DELETE_CHECKED_MATERIALS
})

export const toggleCheckMaterials = check => ({
    type: types.TOGGLE_CHECK_MATERIALS,
    check
})

export const toggleCheckMaterial = id => ({
    type: types.TOGGLE_CHECK_MATERIAL,
    id
})

export const checkOutStock = (id, quantity) => ({
    type: types.CHECKOUT_STOCK,
    id,
    quantity
})

export const checkInStock = (id, quantity) => ({
    type: types.CHECKIN_STOCK,
    id,
    quantity
})