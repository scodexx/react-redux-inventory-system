import { 
    ADD_MATERIALS,
    NEW_MATERIAL,
    EDIT_MATERIAL,
    GET_CHECKED_MATERIALS,
    DELETE_CHECKED_MATERIALS,
    TOGGLE_CHECK_MATERIAL,
    TOGGLE_CHECK_MATERIALS,
    CHECKOUT_STOCK,
    CHECKIN_STOCK
} from '../../constants/ActionTypes'

export default (state = [], action) => {
    switch(action.type) {
        case ADD_MATERIALS:
            return action.materials.map(material => ({
                ...material,
                checked: false
            }))

        case NEW_MATERIAL:
            return [
                {
                    ...action.material,
                    checked: false
                },
                ...state,
            ]

        case EDIT_MATERIAL:
            return state.map(material => {
                if(material.id === action.id) {
                    return Object.assign({}, material, action.material)
                }

                return material
            })

        case GET_CHECKED_MATERIALS:
            return state
                .filter(material => material.checked === true)
                .map(material => material.id)

        case DELETE_CHECKED_MATERIALS:
            return state.filter(material => material.checked !== true)

        case TOGGLE_CHECK_MATERIAL:
            return state.map(material => {
                if(material.id === action.id) {
                    return Object.assign({}, material, {
                        checked: !material.checked
                    })
                }

                return material
            })

        case TOGGLE_CHECK_MATERIALS:
            return state.map(material => ({
                ...material,
                checked: action.check
            }))
        
        case CHECKOUT_STOCK:
            return state.map(material => {
                if(material.id === action.id) {
                    return {
                        ...material,
                        quantity: material.quantity - action.quantity
                    }
                }

                return material
            })

        case CHECKIN_STOCK:
            return state.map(material => {
                if(material.id === action.id) {
                    return {
                        ...material,
                        quantity: material.quantity + action.quantity
                    }
                }

                return material
            })

        default:
            return state
    }
}