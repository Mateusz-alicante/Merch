export const AddItem = ({ item, size, price }) => ({
    type: "ADD_ITEM",
    item,
    size,
    price
})

export const RemoveItem = ({ item }) => ({
    type: "REMOVE_FROM_CART",
    item
})

export const ModQuantity = ({ item, newQuantity }) => ({
    type: "MOD_QUANTITY",
    item,
    newQuantity
})

export const ClearCart = () => ({
    type: "CLEAR_CART"
})

