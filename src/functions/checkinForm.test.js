import { expect } from 'chai'
import sinon from 'sinon'

import { handleCheckin } from './checkinForm'

describe('Checking in form tests', function() {
    let confirmSpy

    beforeEach(function() {
        if (typeof window === 'undefined') {
            global.window = {
                confirm() {}
            }
        }

        confirmSpy = sinon.spy(window, 'confirm')
    })
    
    afterEach(function() {
        confirmSpy.restore()
        delete global.window
    })

    it('Should resolve false if 0 quantity entered', async function() {
        let proceed
        
        await handleCheckin({
            id: 2,
            quantity: 30
        }, 0).then(b => proceed = b)

        expect(
            proceed
        ).to.be.false
    })

    it('Should present a confirm dialog if everything is good', async function() {
        await handleCheckin({
            id: 2,
            quantity: 30
        }, 10)

        expect(
            confirmSpy.called
        ).to.be.true
    })
})