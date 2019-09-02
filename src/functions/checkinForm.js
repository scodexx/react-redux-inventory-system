export const handleCheckin = (material, quantity) => {
    return new Promise(resolve => {
        if(!quantity || quantity === 0) return resolve(false)

        const totalQuantity = material.quantity + quantity

        const c = window.confirm(
            totalQuantity > material.maximum
                ? 'Warning: After check-in, you will be over-stocking. Continue?'
                : 'Confirm check-in?'
        )
        
        return resolve(c === true)
    })
}