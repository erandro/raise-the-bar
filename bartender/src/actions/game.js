import API from "../utils/API.js";

export const requestBar = () => {
    return {
        type: "GAME_REQUEST_BAR",
    }
}

export const reciveBar = (json) => {
    return {
        type: "GAME_RECIVE_BAR",
        payload: json
    }
}

export const fetchBar = () => {
    return function (dispatch) {
        dispatch(requestBar());
        API.getBar()
            .then(
                response => {
                    console.log("###game action###", response)
                    dispatch(reciveBar(response.data))
                }
            ).catch(function (error) {
                console.log("error", error)
            })

    }
}