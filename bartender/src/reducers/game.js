const initialState = {
    left: { status: "back", drink: "" },
    right: { status: "back", drink: "" },
    array: [],
    drinkArray: ["Vodka", "Gin", "Tequila", "Rum", "Orange Juice", "Tomato Juice", "Lemon Juice", "Coke", "Tonic", "Ginger Beer"],
    drinkCount: 10,
    phase: 1,
    music: "STOPPED",
    time: 0,
    modal: false,
    modalIMG: "https://pbs.twimg.com/profile_images/999334416538202112/6Y-babvf_400x400.jpg",
    formModal: false,
    message: "",
    finished: false,
    form: false,
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GAME_RECIVE_BAR":
            return { ...state, array: recreateJson(action.payload) };
        default:
            return state;
    }
}
const recreateJson = (data) => {
    let protoBar = {}
    data.forEach(element => {
        protoBar[element.name] = element;
    });
    let BarCopy = protoBar;
    let testCatArray = []
    for (var cat in BarCopy) {
        if (BarCopy[cat].available) testCatArray.push(cat);
    }
    console.log("game.js (gameReducer) reduced array:", testCatArray);
    return testCatArray;
}

export const addCategoryReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case "CATEGORY_ADD":
            return { ...state, array: [...state.array, action.payload] };
        default:
            return state;
    }
}

export default gameReducer;