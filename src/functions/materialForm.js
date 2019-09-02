export const processForm = ev => {
    const fm = ev.target
    
    const data = {
        product: fm.product.value.trim(),
        barcode: fm.barcode.value.trim(),
        delivery: fm.delivery.value.trim(),
        type: fm.type.value.trim(),
        quantity: Number(fm.quantity.value),
        minimum: Number(fm.minimum.value),
        maximum: Number(fm.maximum.value),
        unit: Number(fm.unit.value),
        price: Number(fm.price.value)
    }

    return data
}