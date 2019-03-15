const reducer = (state = [], action) => {
    switch (action.type) {
        case "CATEGORY_ADD":
            return { ...state, array: [...state.array, action.payload] };
        default:
            return state;
    }
}

export default reducer;