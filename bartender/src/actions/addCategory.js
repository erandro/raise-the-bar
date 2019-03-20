export const addCategory = (category) => {
    return {
        type: "CATEGORY_ADD",
        payload: category
    }
}