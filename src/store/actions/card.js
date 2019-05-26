import * as actions from './../actions/ActionTypes'


export const addNewCard = (id, content) => {
    return {
        type: actions.ADD_NEW_CARD,
        payload: {id, content}
    }
};
export const deleteCard = (id, cardID) => {
    return {
        type: actions.DELETE_CARD,
        payload: {id, cardID}
    }
};
export const deleteColumn = (id)=>{
    return{
        type: actions.DELETE_COLUMN,
        payload:{id}
    }
}