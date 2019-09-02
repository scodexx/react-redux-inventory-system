import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import { addMaterials, newMaterial, editMaterials, getCheckedMaterialsId, deleteCheckedMaterials, toggleCheckMaterials, toggleCheckMaterial, checkOutStock, checkInStock } from '../../actions/materials'
import materialsReducer from '.'

const materials = [{
    id: 1,
    product: "Test product 1"
}, {
    id: 2,
    product: "Test product 2"
}]

deepFreeze(materials)

describe('materials reducers suite', function() {
    it('Should populate with existing materials, with a property of checked:false', function() {
        const initialState = []

        deepFreeze(initialState)

        const expectedmaterials = materials.map(material => ({
            ...material,
            checked: false
        }))

        expect(
            materialsReducer([], addMaterials(materials))
        ).to.eql(expectedmaterials)
    })

    it('Should add a new material to top of materials', function() {
        const initialState = materials

        deepFreeze(initialState)

        const material = {
            id: 3,
            product: 'Test product 3'
        }

        expect(
            materialsReducer(
                initialState,
                newMaterial(material)
            )
        ).to.eql([
            {
                ...material,
                checked: false
            },
            ...materials
        ])
    })

    it('Should edit material material 2', function() {
        expect(
            materialsReducer(
                materials,
                editMaterials(2, {
                    product: 'Testing product 2'
                })
            )
        ).to.eql([{
            id: 1,
            product: "Test product 1"
        }, {
            id: 2,
            product: "Testing product 2"
        }])
    })

    it('Should get all checked materials id', function() {
        const initialState = materials.map(material => {
            if(material.id === 1) {
                return {
                    ...material,
                    checked: true
                }
            }

            return material
        })

        deepFreeze(initialState)

        expect(
            materialsReducer(
                initialState,
                getCheckedMaterialsId()
            )
        ).to.eql([1])
    })

    it('Should delete all checked materials', function() {
        const initialState = materials.map(material => {
            if(material.id === 2) {
                return {
                    ...material,
                    checked: true
                }
            }

            return material
        })
        
        deepFreeze(initialState)

        expect(
            materialsReducer(
                initialState,
                deleteCheckedMaterials()
            )
        ).to.eql([
            {
                id: 1,
                product: "Test product 1"
            }
        ])
    })

    it('Should mark all materials as checked (for Checkbox)', function() {
        const initialState = materials.map(material => ({
            ...material,
            checked: false
        }))

        deepFreeze(initialState)

        expect(
            materialsReducer(
                initialState,
                toggleCheckMaterials(true)
            )
        ).to.eql(
            materials.map(material => ({
                ...material,
                checked: true
            }))
        )
    })

    it('Should unmark all materials as checked (for Checkbox)', function() {
        const initialState = materials.map(material => ({
            ...material,
            checked: true
        }))

        deepFreeze(initialState)

        expect(
            materialsReducer(
                initialState,
                toggleCheckMaterials(false)
            )
        ).to.eql(
            materials.map(material => ({
                ...material,
                checked: false
            }))
        )
    })

    it('Should toggle a particular material checked state', function() {
        const initialState = [
            {
                id: 1,
                product: "Test product 1",
                checked: false
            }, {
                id: 2,
                product: "Test product 2",
                checked: false
            }
        ]

        deepFreeze(initialState)

        const expectedState = [
            {
                id: 1,
                product: "Test product 1",
                checked: false
            }, {
                id: 2,
                product: "Test product 2",
                checked: true
            }
        ]

        deepFreeze(expectedState)

        expect(
            materialsReducer(
                initialState,
                toggleCheckMaterial(2)
            )
        ).to.eql(expectedState)

        expect(materialsReducer(
            expectedState,
            toggleCheckMaterial(2)
        )).to.eql(initialState)
    })

    it('Should checkout 10 items in stock from a material', function() {
        const initialState = [
            {
                id: 1,
                product: "Test product 1",
                quantity: 40
            }, {
                id: 2,
                product: "Test product 2",
                quantity: 15
            }
        ]

        const expectedState = [
            {
                id: 1,
                product: "Test product 1",
                quantity: 30
            }, {
                id: 2,
                product: "Test product 2",
                quantity: 15
            }
        ]

        deepFreeze(initialState)
        deepFreeze(expectedState)

        expect(
            materialsReducer(
                initialState,
                checkOutStock(1, 10)
            )
        ).to.eql(expectedState)
    })

    it('Should checkin 2 items into material stock', function() {
        const initialState = [
            {
                id: 1,
                product: "Test product 1",
                quantity: 17
            }, {
                id: 2,
                product: "Test product 2",
                quantity: 15
            }
        ]

        const expectedState = [
            {
                id: 1,
                product: "Test product 1",
                quantity: 17
            }, {
                id: 2,
                product: "Test product 2",
                quantity: 20
            }
        ]

        deepFreeze(initialState)
        deepFreeze(expectedState)

        expect(
            materialsReducer(
                initialState,
                checkInStock(2, 5)
            )
        ).to.eql(expectedState)
    })
})