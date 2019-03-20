const initialState = { array: [] };
const addCategoryReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case "CATEGORY_ADD":
            return { array: [...state.array, action.payload] };
        default:
            return state;
    }
}

export default addCategoryReducer;