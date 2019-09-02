export const handleCheckout = (material, quantity) => {
    return new Promise(resolve => {
        if(!quantity || quantity === 0) return resolve(false)
        
        if(material.quantity < quantity) {
            window.alert('Oops, not enough quantity in stock for checkout')
            return resolve(false)
        }

        const quantityLeft = material.quantity - quantity

        const c = window.confirm(
            quantityLeft === 0 
                ? 'After checkout, you will be out of stock. Contiune?'
            : quantityLeft < material.minimum 
                ? 'Warning: After checkout, you will be low on stock for this material. Continue?'
            : 'Continue?'
        )

        return resolve(c === true)
    })
}