import materials from '../materials.json'

import { 
    addMaterials,
    newMaterial,
    editMaterials,
    getCheckedMaterialsId,
    deleteCheckedMaterials,
    checkOutStock,
    checkInStock
} from '../actions/materials'

const request = (ms) => new Promise(resolve => setTimeout(resolve, ms))

/* eslint-disable-next-line */
export const fetchMaterials = () => {
    return dispatch => {
        return request(500).then(() =>
            dispatch(
                addMaterials(materials)
            )
        )
    }
}

export const createNewMaterial = material => {
    return dispatch => {
        // mimicking fetch request delay
        return request(500).then(() => 
            dispatch(
                newMaterial({
                    ...material,
                    id: new Date().getTime()
                })
            )
        )
    }
}

/* eslint-disable-next-line */
export const updateMaterial = (id, material) => {
    return dispatch => {
        // mimicking fetch request delay
        return request(500).then(() =>
            dispatch(
                editMaterials(id, material)
            )
        )
    }
}

export const removeMaterials = () => {
    /* eslint-disable-next-line */
    const checkedMaterials = getCheckedMaterialsId()

    return dispatch => {
        return request(500).then(() =>
            dispatch(
                deleteCheckedMaterials()
            )
        )
    }
}

export const requestCheckOutStock = (id, quantity) => {
    return dispatch => {
        return request(500).then(() =>
            dispatch(
                checkOutStock(id, quantity)
            )
        )
    }
}

export const requestCheckInStock = (id, quantity) => {
    return dispatch => {
        return request(500).then(() =>
            dispatch(
                checkInStock(id, quantity)
            )
        )
    }
}