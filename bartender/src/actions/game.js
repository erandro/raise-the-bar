import API from "../utils/API.js";

// export const requestBar = (json) => {
//     return {
//         type: "GAME_REQUEST_BAR",
//         payload: json
//     }
// }

export const reciveBar = (json) => {
    return {
        type: "GAME_RECIVE_BAR",
        payload: json
    }
}


export let barDataCache = {};
export const fetchBar = () => {
    return function (dispatch) {
        if (Object.keys(barDataCache).length !== 0) {
            dispatch(barDataCache);
        } else {
            API.getBar()
                .then(
                    response => {
                        barDataCache = response.data;
                        console.log("game.js (action) response:", response)
                        dispatch(reciveBar(response.data))
                    }
                ).catch(function (error) {
                    console.log("game.js (action) error:", error)
                })
        }
    }
}