export const addToCart = (id,info) =>{
    return {
        type:"ADD_TO_CARD",
        id:id,
        info:info
       
    }
}
export const updateQuantity = (id,quantity=1) =>{
    return {
        type:"UPDATE_QUANTITY",
        id:id,
        quantity:quantity
       
    }
}
export const deleteItem = (id) =>{
    return {
        type:"DELETE_ITEM",
        id:id
       
    }
}
export const deleteItemAll = () =>{
    return {
        type:"DELETE_ITEM_ALL",
        
       
    }
}