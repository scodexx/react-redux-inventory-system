import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import { processForm } from './MaterialForm'

const formData = {
    target: {
        product: {
            value: "Iphone XS"
        },
        barcode: {
            value: "67SDGHSD667SD"
        },
        delivery: {
            value: "03/11/2019"
        },
        type: {
            value: "Phones"
        },
        quantity: {
            value: 18
        },
        minimum: {
            value: 3
        },
        maximum: {
            value: 50
        },
        unit: {
            value: 800
        },
        price: {
            value: 950
        }
    }
}

deepFreeze(formData)

describe('MaterialForm test suite', function() {
    it('Should return an object of form data', function() {
        expect(
            processForm(formData)
        ).to.eql({
            product: "Iphone XS",
            barcode: "67SDGHSD667SD",
            delivery: "03/11/2019",
            type: "Phones",
            quantity: 18,
            minimum: 3,
            maximum: 50,
            unit: 800,
            price: 950
        })
    })
})