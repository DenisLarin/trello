import * as actionTypes from './../actions/ActionTypes';
import updatedObject from '../../shared/updateObject';

const initState = {
    taskBlocks: [

    ]
};
const addNewCard = (state, action) => {
    //если блока нет то создать
    if (!state.taskBlocks[action.payload.id]) {
        const newBlock = {
            ...state,
            taskBlocks: [...state.taskBlocks,{blockItem: action.payload.content, cards:[]}]
        };
        return updatedObject(state, newBlock);
    }
    else {
        const updatedBlock = state.taskBlocks[action.payload.id];
        updatedBlock.cards.push(action.payload.content);
    }
    return state;
};
const addNewColumn = (state, action) => {

};
const deleteCard = (state, action) => {
    const updatedBlock = state.taskBlocks[action.payload.id];
    updatedBlock.cards.splice(action.payload.cardID, 1);
    return state;
}
const deleteColumn = (state, action) => {
    const newColumns = {
        ...state,
        taskBlocks: state.taskBlocks.filter(
            (_, index) => index !== action.payload.id
        )
    };
    return updatedObject(state, newColumns);
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NEW_CARD:
            return addNewCard(state, action);
        case actionTypes.ADD_NEW_COLUMN:
            return addNewColumn(state, action);
        case actionTypes.DELETE_CARD:
            return deleteCard(state, action);
        case actionTypes.DELETE_COLUMN:
            return deleteColumn(state, action);
        default:
            return state;

    }
};
export default reducer;