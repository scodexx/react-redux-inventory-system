import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import * as types from '../constants/ActionTypes'
import { addMaterials, editMaterials } from './materials'

const materials = [{
    id: 1,
    product: "Test product 1"
}, {
    id: 2,
    product: "Test product 2"
}]

deepFreeze(materials)

describe('Actions test suite', function() {
    it('Should create a proper action for adding materials', function() {
        expect(
            addMaterials(materials)
        ).to.eql({
            type: types.ADD_MATERIALS,
            materials,
        })
    })

    it('Should create a proper action for editing materials', function() {
        expect(
            editMaterials(2, {
                product: 'Testing product 2'
            })
        ).to.eql({
            type: types.EDIT_MATERIAL,
            id: 2,
            material: {
                product: 'Testing product 2'
            }
        })
    })
})