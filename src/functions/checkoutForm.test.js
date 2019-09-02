import { expect } from 'chai'
import sinon from 'sinon'

import { handleCheckout } from './checkoutForm'

describe('Checking in form tests', function() {
    let alertSpy
    let confirmSpy

    beforeEach(function() {
        if (typeof window === 'undefined') {
            global.window = {
                alert() {},
                confirm() {}
            }
        }

        alertSpy = sinon.spy(window, 'alert')
        confirmSpy = sinon.spy(window, 'confirm')
    })
    
    afterEach(function() {
        confirmSpy.restore()
        alertSpy.restore()
        delete global.window
    })

    it('Should resolve false if 0 quantity entered', async function() {
        let proceed
        
        await handleCheckout({
            id: 2,
            quantity: 30
        }, 0).then(b => proceed = b)

        expect(
            proceed
        ).to.be.false
    })

    it('Should call alert then result to false if quantity is more than stock', async function() {
        let proceed

        await handleCheckout({
            id: 2,
            quantity: 30
        }, 40).then(b => proceed = b)

        expect(
            alertSpy.called
        ).to.be.true

        expect(
            proceed
        ).to.be.false
    })

    it('Should present a confirm dialog if everything is good', async function() {
        await handleCheckout({
            id: 2,
            quantity: 30
        }, 10)

        expect(
            confirmSpy.called
        ).to.be.true
    })
})