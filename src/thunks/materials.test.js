import { expect } from 'chai'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import materials from '../materials.json'

import { fetchMaterials, createNewMaterial, updateMaterial } from './materials'
import { addMaterials } from '../actions/materials'
import * as types from '../constants/ActionTypes'

export const mockStore = configureMockStore([thunk])

describe('Thunks test suite', function() {
    let store

    beforeEach(function() {
        store = mockStore()
    })

    it('Should fetch all materials and call dispatch', async function() {
        await store.dispatch(fetchMaterials())
        const actions = store.getActions()

        expect(
            actions[0]
        ).to.eql(addMaterials(materials))
    })

    it('Should create a new material', async function() {
        const material = {
            "id": 10,
            "product": "Samsum Galazy S10",
            "barcode": "HGS6SJSD777SD",
            "delivery": "02/09/2019",
            "type": "Phones",
            "quantity": 20,
            "unit": 800,
            "price": 1000,
            "minimum": 3,
            "maximum": 50
        }

        await store.dispatch(createNewMaterial(
            material
        ))
        const actions = store.getActions()

        expect(
            actions[0]
        ).to.have.property('type', types.NEW_MATERIAL)
    })

    it('Should update material', async function() {
        const material = materials[1]

        await store.dispatch(updateMaterial(
            material.id, material
        ))
        const actions = store.getActions()

        expect(
            actions[0]
        ).to.have.property('type', types.EDIT_MATERIAL)
    })
})