const ADD = "cart/ADD";

export const cartReducer = (state = {}, action) => {
    Object.freeze(state);

    const newState = { ...state }

    switch (action.type) {
        case ADD:
            newState[action.cartItem.id] = cartItem;
            return newState;
        default:
            return newState;
    }
}