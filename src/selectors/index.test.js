import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import { getMaterials } from './index'

const materials = [{
    product: "Test product 1"
}, {
    product: "Test product 2"
}]

deepFreeze(materials)

describe('Get available materials', function() {
    it('Should return an array of materials', function() {
        const state = {
            materials
        }

        deepFreeze(state)

        expect(
            getMaterials(state)
        ).to.eql(materials)
    })
})